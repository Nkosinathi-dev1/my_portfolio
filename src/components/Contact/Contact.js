import React from "react";
import "./contact.css"

export default function Contact(){
    return(
        <>
            <section className="contact-section">
                <div>
                    <h2>Contact</h2>
                    <h3>Let Us Chat</h3>
                    <h4>fill up the form and I’ll get back to you</h4>
                    <a href="#">nkosinathi@nathingele.com</a>
                    <a href="#">+27 73 695 4921</a>

                </div>
                <div>
                    <form>
                        <label>Name</label>
                        <input type={"text"}/>
                        <label>Email</label>
                        <input type={"email"}/>
                        <label>Tell me about the project</label>
                        <input type={"button"}/>
                    </form>
                </div>
            </section>
        </>
    )
}