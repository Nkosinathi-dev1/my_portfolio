import React from "react";
import "./contact.css";

export default function Contact(){
    return(
        <>
            <div className="contact--section">
                <div className="contact--infor">
                    <h2>Contact</h2>
                    <h3><span>Let</span> Us Chat</h3>
                    <h4>fill up the form and I’ll get back to you</h4>
                    <a href="#">nkosinathi@nathingele.com</a><br></br>
                    <a href="#">+27 73 695 4921</a>
 
                </div> 
                <div>
                    <form className="form">
                        <label>Name</label>
                        <input type={"text"}/>
                        <label>Email</label>
                        <input type={"email"}/>
                        <label>Tell me about the project</label>
                        <div className="more--btn"></div>
                    </form>
                </div>
            </div>
        </>
    )
}