import "./Collection.css"
import Item from "./Item";
import { useState,useEffect } from "react";

const URL =  "https://api.discogs.com/users/maxlich07/collection/folders/0/releases"

function Collection(){
    const[userCollection, setUserCollection] = useState([]);
        useEffect(()=>{
        const fetchData = async () =>{
            try{
                const response = await fetch(URL);
                const json = await response.json();
                console.log(json);
                setUserCollection(json.releases || []);
            }
            catch(error)
            {
                console.log(error);
            };
            }
    fetchData();
    },[]);

    const listAlbums = userCollection.map(release=> 
        <Item albumName={
            release.basic_information.title} 
            artistName={release.basic_information.artists?.[0]?.name} 
            thumbnail={release.basic_information.cover_image} 
            albumDescription={`Released in ${release.basic_information.year}`} 
            dateAdded={release.date_added}
            genre={release.basic_information.genres}
        />
    )
    return(
        <div className="collection-container">
            {listAlbums}
        </div>
    )        
};
export default Collection;