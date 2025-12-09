import "./Item.css"

function Item(props){
    return(
        <div className="item-container">
            <div style={{width:"300px", height:"auto",margin:"10px", backgroundColor:"#727272"}}/>
            <div className="text-container">
                <p>{props.albumName}</p>
                <p>{props.artistName}</p>
                <p>{props.albumDescription}</p>
            </div>
        </div>
    )
};
export default Item;