import React from "react";
import fimg1 from "./assets/icons/logo.svg";
import { HashLink as Link } from "react-router-hash-link";
import icon1 from "./assets/icons/twitter-icon.svg";
import icon2 from "./assets/icons/facebook-icon.svg";
import icon3 from "./assets/icons/instagram-icon.svg";

function Footer()
{
    return(
        <div className="footer">
        <footer>
            <div className="footer-details">
                <img src={fimg1} alt="footer" />
                <Link to='#about' smooth className="nav-item" >ABOUT US</Link> 
                <Link to='#menu' smooth className="nav-item" >MENU</Link> 
                <Link to='#contact' smooth className="nav-item" >CONTACT</Link>
                <div className="fdetail">
                    <p>Stay up to date with our new openings, upcoming events, seasonal specials and promotions
                    . Check our socials</p>
                    <div className="icon-flex">
                        <a href="https://twitter.com/home"><img src={icon1} alt="twitter" /> </a>
                        <a href="https://www.facebook.com/"><img src={icon2} alt="facebook" /> </a>
                        <a href="https://www.instagram.com/"><img src={icon3} alt="instagram" /> </a>
                    </div>
                </div> 
            </div>
            <hr></hr>
            <p className="flast">© 2023 The Veggie King</p>
            </footer>
        </div>
    );
}
export default Footer;