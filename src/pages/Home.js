import Menu from "../menu";
import React from "react";
import './Home.css';
import './About.css';
import Counter from '../Components/Calculator';

function DisplayMenu() {
    //creates menu items in html
    const menuItems = Menu.map((items) => {
        return(
        <div>
            <h3 className="heading">{items.name}</h3>
            <div>
                    <img id="image" src={items.src} alt="Afk atm"></img>
            </div>
            <div className="">
                <Counter />
            </div>
        </div>
        );
    });
    //displays
        return (
        <body>
            <div className="grid2">
                <h2 className="heading">
                    Menu of FishyFoods
                </h2>
                <div id="menu">
                    {menuItems}
                </div>
            </div>
        </body>
        );
    }

export default DisplayMenu