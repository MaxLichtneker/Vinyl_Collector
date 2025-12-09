import "./Collection.css"
import Item from "./Item";

function Collection(){
    const albums = [
    {
        id:0,
        albumName: "AM",
        artistName: "Arctic Monkeys",
        albumDescription: "This album is made by the arctic monkeys"
    },
    {
        id:1,
        albumName: "AM",
        artistName: "Arctic Monkeys",
        albumDescription: "This album is made by the arctic monkeys"
    },
    {
        id:2,
        albumName: "AM",
        artistName: "Arctic Monkeys",
        albumDescription: "This album is made by the arctic monkeys"
    },
    {
        id:3,
        albumName: "The colour of sound",
        artistName: "Leisure",
        albumDescription: "This album is made by the Leisure"
    }]
    
    const listAlbums = albums.map(album=> 
        <Item albumName={album.albumName} artistName={album.artistName} albumDescription={album.albumDescription}></Item>
    )

    return(
        <div className="collection-container">
            {listAlbums}
        </div>
    )        
};
export default Collection;