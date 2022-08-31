import React from "react";
import "./testimonials.css"

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "../../images/computer-ga1f97ebd8_1920.jpg"
import image2 from "../../images/gears-g9b2fa6cac_1280.png"
import image3 from "../../images/hd-wallpaper-g656559fa7_1920.jpg"
import image4 from "../../images/plans-gac7401484_1920.jpg"
import image5 from "../../images/web-design-g2f2193eb5_1920.jpg"



export default function Testimonials(){
    return(
        <>
            <section className="testimonials--section">
                <div>
                    <h2>Testimonials</h2>
                    <h3>Comments on My Work</h3>
                    <h4>What people say about me</h4>
                </div>
                <div className="testimonials--cards">
                 
                <AliceCarousel autoPlay autoPlayInterval="2000">
                            <div>
                                <h4>Graphic Design</h4>
                                <img src={image1} className="sliderimg"/>
                            </div>
                            <div>
                                <h4>Coding</h4>
                                <img src={image2} className="sliderimg"/>
                            </div>
                            <div>
                                <h4>Databases</h4>
                                <img src={image3} className="sliderimg"/>
                            </div>
                            <div>
                            <h4>UI/UX Design</h4>
                                <img src={image4} className="sliderimg"/>
                            </div>
                            <div>
                                <h4>Testing</h4>
                                <img src={image5} className="sliderimg"/>
                            </div>
                              
                    </AliceCarousel>
                 
                </div> 
            </section>
        </>
    ) 
}