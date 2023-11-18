import React from "react";
import gimg1 from "../assets/images/gallery-photo-1.png";
import gimg2 from "../assets/images/gallery-photo-2.png";
import gimg3 from "../assets/images/gallery-photo-3.png";
import gimg4 from "../assets/images/gallery-photo-4.png";
import gimg5 from "../assets/images/gallery-photo-5.png";
import gimg6 from "../assets/images/gallery-photo-6.png";


function Gallery()
{

    return(
        <section id="gallery">
            <div className="gallery">
                <div className="gallery-details">
                    <h3>Good food = happy clients</h3>
                </div>
                <div className="gallery-images">
                    <img src={gimg1}  alt="gallery1" />
                    <img src={gimg2} alt="gallery2" />
                    <img src={gimg3} alt="gallery3" />
                    <img src={gimg4} alt="gallery4" />
                    <img src={gimg5} alt="gallery5" />
                    <img src={gimg6} alt="gallery6" />
                </div>
            </div>
        </section>
    );
}

export default Gallery;