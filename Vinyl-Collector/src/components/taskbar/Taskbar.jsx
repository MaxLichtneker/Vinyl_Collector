import "./Taskbar.css"
import SecondaryNavbar from "./SecondaryNavbar";

function Taskbar(){
    return(
        <div className="navbar">
            <div className="taskbar">
                <div className="taskbar-container">
                    <h1>VINYL COLLECTOR</h1>
                    <input className="taskbar-searchbar"></input>
                </div>
                <div className="taskbar-container-right">
                    <div style={{width:"50px", height:"50px", borderRadius:"50px",backgroundColor:"#ffff"}}></div>
                </div>
            </div> 
            <SecondaryNavbar/>
        </div>
    )
};

export default Taskbar;