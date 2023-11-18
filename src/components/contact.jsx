import React from "react";
import ic1 from "../assets/icons/time-icon.svg";
import ic2 from "../assets/icons/map-icon.svg";
import ic3 from "../assets/icons/phone-icon.svg";

function Contact()
{
    return(
        <section id="contact">
            <div className="contact">
                <div className="contact-details">
                    <h6>Contact</h6>
                    <p>We’re waiting for you!</p>
                </div>
                <div className="contact-cards">
                    <div className="cnt1 cnt">
                    <img src={ic1} alt="time"></img>
                        <h3>Today 12 pm - 9 pm</h3>
                        <p>Find Us</p>
                    </div>
                    <div className="cnt2 cnt">
                    <img src={ic2} alt="location"></img>
                        <h3>3883 Rupert St, Vancouver</h3>
                        <p>Working Hours</p>
                    </div>
                    <div className="cnt3 cnt">
                    <img src={ic3} alt="phone"></img>
                        <h3>(604) 569-2198</h3>
                        <p>Call To Us</p>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}

export default Contact;