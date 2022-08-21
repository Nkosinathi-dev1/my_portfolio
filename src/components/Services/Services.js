import React from "react";
import "./services.css"

export default function Services(){
    return(
        <>
            <section className="services-section">
                <div className="introduce">
                    <h2>Introduce</h2>
                    <h3>Hello</h3>
                    <h3>I'm Nkosinathi Ngele</h3>
                    <h4>Software Designer and developer</h4>
                    <p>Experienced Junior Software Developer with a demonstrated history of more than 3 years working in the information technology and services industry. Skilled in Designing, Coding  and Database.</p>
                    <a href="#">Download CV</a>
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