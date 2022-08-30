import React from "react"
import "./home.css"
import homeImg from "../../images/homeImg.jpg"

export default function Home(){
    return(
        <>
            <header className="home--section">
                <div className="home-img">
                    <img width={"760px"} height={"720px"} src={homeImg} alt="Profile-img" />
                </div>
                <div className="home-desc">
                    <h1>Software Developer and Designer</h1>
                    <p>I design and develop fantastic things</p>
                    <p>
                        <span className="count--num">3+</span> <span className="count--desc">Years of <span>experience</span></span>
                        <span className="count--num">10+</span> <span className="count--desc">Complete <span>projects</span></span>
                    </p>
                    <a href="#">Let’s Chat</a>
                </div>
            </header> 
        </>
    )
}