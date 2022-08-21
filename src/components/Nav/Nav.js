import React from "react"
import "./nav.css"
 

export default function Nav(){
    return(
        <>
            <nav className="nav--bar">
                <div className="logo">
                    Nathi Ngele
                </div>
                <ul className="nav--links">
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <ul className="nav--contact">
                    <li><a href="#">GitHub</a></li>
                    <li><a href="#">Dribbble</a></li>
                    <li><a href="#">Email</a></li>
                </ul>
            </nav>
        </>
    )
}