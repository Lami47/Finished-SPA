import React from "react";
import './About.css';
import userData from "../usersData";

function About() {
    //displays
        return (
        <body>
            <h3 className="heading"> {userData[0].name} </h3>
            <h3>You've eaten a grand total of {userData[0].totalSushiOrdered} sushi rolls!</h3>
        </body>
        );
    }

export default About