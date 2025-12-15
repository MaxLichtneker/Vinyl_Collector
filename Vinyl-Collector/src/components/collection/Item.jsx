import "./Item.css"

function Item(props){
    
    const date = new Date(props.dateAdded).toLocaleDateString("en-US",{
        day:"numeric",
        month:"long",
        year:"numeric",
    })

    var genres = props.genre.join(', ');

    return(
        <div className="item-container">
            <img src={props.thumbnail} style={{width:"300px", margin:"10px", backgroundColor:"#e0e0e0ff"}}/>
            <div className="text-container">
                <h1 className="header-style">{props.albumName}</h1>
                <p className="infotext-style">Artist: {props.artistName}</p>
                <p className="infotext-style">{props.albumDescription}</p>
               <p className="infotext-style">Genre: {genres}</p>
            </div>
            <div className="text-container-right">
                <p>Added to collection in: {date}</p>
            </div>
        </div>
    )
};
export default Item;