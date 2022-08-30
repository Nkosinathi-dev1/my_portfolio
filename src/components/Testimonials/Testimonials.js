import React from "react";
import "./testimonials.css"
import Slideshow from "../Testimonials/slideshow"



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
                 
                 {/*  */}
                 <Slideshow />
                 {/*  */}
                 
                </div> 
            </section>
        </>
    ) 
}