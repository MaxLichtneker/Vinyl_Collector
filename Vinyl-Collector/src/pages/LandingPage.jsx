import "./LandingPage.css"
import Taskbar from "../components/taskbar/Taskbar";
import SecondaryNavbar from "../components/taskbar/SecondaryNavbar";
import Collection from "../components/collection/Collection";
import { useState,useEffect } from "react";
import CollectionFilter from "../components/collection/Filter";

function LandingPage(){
  const [currentPage, setpage] = useState(1);
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
        return(prevCount +=1);
      }else{
          return(prevCount = 3)
        }
      });
  }

  function PreviousPage(){
    setpage(function(prevCount){
      if(prevCount > 1){
          handleURL(collectionPages.pagination.urls.prev)
        return(prevCount -=1);
      }else{
           return(prevCount = 1);
      }
    });
  }

  return (
  <>
    <Taskbar/>
      <div className='landing-page-container'>

      <h1>YOUR COLLECTION</h1>

      <CollectionFilter/>

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