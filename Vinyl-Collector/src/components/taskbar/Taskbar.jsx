import "./Taskbar.css"
import SecondaryNavbar from "./SecondaryNavbar";
import Hamburger from "../hamburgermenu/HamburgerMenu";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";

function Taskbar(){

    const [searchbar, setSearchbar] = useState(false);
    const toggle = () => setSearchbar(searchbar => !searchbar);

    return(
        <div className="navbar">
            <div className="taskbar">
                <div className="taskbar-container">
                    <h1 className={`brand ${searchbar ? 'hidden' : ''}`}>VINYL COLLECTOR</h1>
                    <input className="taskbar-searchbar"></input>
                    <div className={`secondary-search-container ${searchbar ? 'visible' : ''}`}>
                        <input className="secondary-searchbar"></input>
                    </div>
                </div>
                <div className="taskbar-container-right">
                    <div className="user-profile"></div>
                    
                    <div className="searchbar-button">
                    <button onClick={toggle}><IoSearch/></button>
                    </div>

                    <div className="Hamburger-menu">
                        <Hamburger></Hamburger>
                    </div>
                </div>
            </div> 
            <SecondaryNavbar/>
        </div>
    )
};

export default Taskbar;