import React from "react";
import "./portfolio.css"
import portfolioimg01 from "../../images/ELAPP.png"
import portfolioimg02 from "../../images/puzzlegame.png"

export default function Portfolio(){
    return(
        <>
            <section className="portfolio-section">
                <div>
                    <h2>Portfolio</h2>
                    <h3>My previous work</h3>
                    <p>Solution for digital experience</p>
                </div>
                <div className="portfolio-cards">
                <div className="portfolio-card">
                        <div>

                        </div>
                        <img src={portfolioimg02} alt="portfolioimg02" />
                    </div>
                    <div className="portfolio-card">
                        <div>

                        </div>
                        <img src={portfolioimg01} alt="portfolioimg01" />
                    </div>
                    <div className="portfolio-card">
                        <div>

                        </div>
                        <img src={portfolioimg02} alt="portfolioimg02" />
                    </div>
                    <div className="portfolio-card">
                        <div>

                        </div>
                        <img src={portfolioimg01} alt="portfolioimg01" />
                    </div>
                    <div className="portfolio-card">
                        <div>

                        </div>
                        <img src={portfolioimg02} alt="portfolioimg02" />
                    </div>
                    <div className="portfolio-card">
                        <div>

                        </div>
                        <img src={portfolioimg01} alt="portfolioimg01" />
                    </div>
                </div>
                <div>
                    <a href="#">Explore more</a>
                </div>
            </section>
        </>
    )
}