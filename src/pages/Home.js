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
            <div className="box">
                <Counter />
            </div>
        </div>
        );
    });
    //displays
        return (
        <body>
            <h1 className="heading">
                Menu of FishyFoods
            </h1>
            <div id="menu">
                {menuItems}
            </div>
        </body>
        );
    }

export default DisplayMenu