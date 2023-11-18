import React,{useState} from "react";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../assets/icons/logo.svg";

function Nav()
{
    const[navMenu, setNavMenu] = useState(false);
    return(
        
        <section>
            <div className="nav">
                <nav>
                    <Link to='/' className="title"><img src={logo} alt="logo" /></Link>
                    <div className="nav-menu" onClick={() =>{
                        setNavMenu(!navMenu);
                    }}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul className={navMenu ? "open" : ""}>
                        <li><Link to='#about' smooth className="nav-item" >ABOUT US</Link> </li>
                        <li><Link to='#menu' smooth className="nav-item">MENU</Link> </li>
                        <li><Link to='#contact' smooth className="nav-item">CONTACT</Link> </li>
                    </ul>
                </nav>
            </div>
        </section>
        
    );
}
export default Nav;