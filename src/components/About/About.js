import React from "react";
import "./about.css";
import profileimg from "../../images/nathiprofile.png"

export default function About(){
    return(
        <>
            <section className="about--section">
            <div>
                <div className="introduce">
                        <h2>Introduce</h2>
                        <h3>Hello</h3>
                        <h3>I'm Nkosinathi Ngele</h3>
                        <h4>Software Designer and developer</h4>
                        <p>Experienced Junior Software Developer with a demonstrated history of more than 3 years working in the information technology and services industry. Skilled in Designing, Coding  and Database.</p>
                        <a href="#">Download CV</a>
                    </div>
                </div>
                <div className="profile-pic">
                    <img className="profile--img" src={profileimg} alt="profile image"/>

                </div>
            </section>
        </>
    )
}