import React from "react";
import "./services.css"

export default function Services(){
    return(
        <>
            <section className="services-section">
                <div className="introduce">
                    <h2>Services</h2>
                    <h3>My previous work</h3>
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