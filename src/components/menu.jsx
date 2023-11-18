import React from "react";
import mimg1 from "../assets/images/menu-section-chickpae-salad.png";
import mimg2 from "../assets/images/menu-section-chickpae-wrap.png";
import mimg3 from "../assets/images/menu-section-mighty-burger.png";
function Menu()
{
    const items = [{
        menuImg: mimg3,
        name: "Mighty Burger",
        detail: "Served with fries and drink"
    },
    {
        menuImg: mimg1,
        name: "Chickpae's salad",
        detail: "Served with fries and drink"
    },
    {
        menuImg: mimg2,
        name: "Chickpae's wrap",
        detail: "Served with fries and drink"
    }]
    return(
        <section id="menu">
            <div className="menu">
            <div className="menu-details">
                <h5>Menu</h5>
                <h3>Explore our best food</h3>
                <p>Below you can see our best selling meals!</p>
            </div>
            <div className="menu-card">
                <div className="card-container1 card-deco">
                    <img src={items[0].menuImg} alt="menu1" />
                    <h3>{items[0].name}</h3>
                    <p>{items[0].detail}</p>
                     </div>
                    <div className="card-container2 card-deco">
                    <img src={items[1].menuImg} alt="menu2" />
                    <h3>{items[1].name}</h3>
                    <p>{items[1].detail}</p>
                    </div>
                    <div className="card-container3 card-deco">
                    <img src={items[2].menuImg} alt="menu3" />
                    <h3>{items[2].name}</h3>
                    <p>{items[2].detail}</p>
                    </div>
                
            </div>
            </div>
        </section>
    );
}

export default Menu;