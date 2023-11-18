import React from "react";
import abtimg from "../assets/images/about-us-section-food.png";
 
function About()
{
    return(
        <section id="about">
            <div className="about">
            <div className="bigcrl"></div>
                <div className="about-img">
                    <img src={abtimg} alt="aboutimg" />
                </div>
                <div className="about-details">
                    <h5>About Us</h5>
                    <h2>Few words about us </h2>
                    <p>We are not ordinary food truck. We create a place overflowing with positive energy that it expresses important to us values. Get to know them specifically.</p>
                </div>
            </div>
        </section>
    );
}

export default About;