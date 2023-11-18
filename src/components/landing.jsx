import React from "react";
import Heroimg from "./heroimg";
import Endimg from "../assets/images/hero-section-food.png";
import Icon from "../assets/icons/check-menu-icon.svg";
import { HashLink as Link } from "react-router-hash-link";
function Landing()
{
    return(
        <section id="landing">
            <div className="landing">
                <div className="landing-details">
                    <h1>Healthy & fresh Food for you</h1>
                    <p>Created for lovers of healthy, delicious and non-obvious food.</p>
                    <Link to='#menu' smooth className="button">Check Menu <img src={Icon} alt="icon" /> </Link>
                </div>
                <div className="landing-img"> <Heroimg /> </div>
                <div className="landing-img2"><img src={Endimg} alt="end"/> </div> 
                <div className="landing-border"></div>
            </div>
        </section>
    );
}

export default Landing;