import React from "react";
import "./testimonials.css"

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
                    <div>card 1</div>
                    <div>card 2</div>
                    <div>card 3</div>
                </div> 
            </section>
        </>
    ) 
}