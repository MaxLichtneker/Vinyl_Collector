import "./LandingPage.css"
import Taskbar from "../components/taskbar/Taskbar";
import SecondaryNavbar from "../components/taskbar/SecondaryNavbar";
import Collection from "../components/collection/Collection";
import { useState,useEffect } from "react";

function LandingPage(){
  const [currentPage, setpage] = useState(0);
  const [url, setPageURL] = useState("https://api.discogs.com/users/maxlich07/collection/folders/0/releases");
  
  const[collectionPages, setCollectionPages] = useState([]);
        useEffect(()=>{
        const fetchData = async () =>{
            try{
                const response = await fetch(url);
                const json = await response.json();
                console.log(json.pagination.urls.next)
                setCollectionPages(json || []);
            }
            catch(error)
            {
                console.log(error);
            };
            }
    fetchData();
    },[url]);

 
  function handleURL(e){
    setPageURL(e);
    console.log(e);  
  }

  function NextPage(){
    setpage(function(prevCount){
        if(prevCount < collectionPages.pagination.pages){
        handleURL(collectionPages.pagination.urls.next)
        window.scrollTo(0, 0);
        return(prevCount +=1);
      }else{
          return(prevCount = 3)
        }
      });
  }

  function PreviousPage(){
    setpage(function(prevCount){
      if(prevCount > 0){
          handleURL(collectionPages.pagination.urls.previous)
        return(prevCount -=1);
      }else{
           return(prevCount = 0);
      }
    });
  }

  return (
  <>
    <SecondaryNavbar/>
    <Taskbar/>
      <div className='landing-page-container'>

      <h1>YOUR COLLECTION</h1>

      <Collection url={url}/>

      <div className="collection-page-container">
        <button onClick={PreviousPage}>previous page</button>
        <p className="pagetext-style">{currentPage}</p>
        <button onClick={NextPage}>next page</button>
      </div>

    </div>
  </>
  )
}

export default LandingPage;