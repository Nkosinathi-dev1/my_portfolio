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
                    <h1>Software Designer and Developer</h1>
                    <p>I design and develop fantastic things</p>
                    <a href="#">Let’s Chat</a>
                    <p><span>3+</span> Years of experience</p>
                    <p><span>10+</span> Complete projects</p>
                </div>
            </header>
        </>
    )
}