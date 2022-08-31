import React from "react";
import "./services.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "../../images/computer-ga1f97ebd8_1920.jpg"
import image2 from "../../images/gears-g9b2fa6cac_1280.png"
import image3 from "../../images/hd-wallpaper-g656559fa7_1920.jpg"
import image4 from "../../images/plans-gac7401484_1920.jpg"
import image5 from "../../images/web-design-g2f2193eb5_1920.jpg"


export default function Services(){
    return(
        <>
            <section className="services-section">
                <div className="introduce">
                    <h2>Services</h2>
                    <h3>My work</h3>
                    <div>
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
                            <h4>System Design</h4>
                                <img src={image4} className="sliderimg"/>
                            </div>
                            <div>
                                <h4>Testing</h4>
                                <img src={image5} className="sliderimg"/>
                            </div>
                              
                        </AliceCarousel>
                    </div>
                </div>
                <div className="services-cards">
                    <div>
                        <h4>Design</h4>
                        <p>Create digital products with unique ideas</p>
                    </div>
                    <div>
                        <h4>Coding</h4>
                        <p>Write a clean frontend and backend code </p>
                    </div>
                    <div>
                        <h4>Database</h4>
                        <p>Create databases and run queries</p>
                    </div>
                </div>

            </section>
        </>
    )
}