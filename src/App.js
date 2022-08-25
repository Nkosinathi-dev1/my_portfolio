import React from "react"
import Nav from "./components/Nav/Nav"
import Home from "./components/Home/Home"
import Services from "./components/Services/Services"
import Skills from "./components/Skills/Skills"
import Portfolio from "./components/Portfolio/Portfolio"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import "../src/style/style.css"
import About from "./components/About/About"
import Testimonials from "./components/Testimonials/Testimonials"


export default function App(){
    return(
        <>
            <Nav />
            <Home />
            <About />
            <Services />
            <Skills />
            <Portfolio />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    )
}


