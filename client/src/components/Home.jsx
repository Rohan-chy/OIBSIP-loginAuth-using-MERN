import React from 'react'
import "../style/home.css"
import picture from "../assets/Learn-coding-online.jpeg"

const Home = () => {
  return (
    <>
         <header>
        <nav>
            <div className="logo">IT Solution</div>
            <ul>
                <li>Home</li>
                <li>Services</li>
                <li>About Us</li>
                <li>Contact</li>
            </ul>
        </nav>
    </header>
    <section className="hero">
        <h1>Welcome to IT Solution</h1>
        <p>Your IT Solutions Partner</p>
    </section>
    <section className="services">
        <h2>Our Services</h2>
        <div className="allservice">
        <div className="service">
            <img src={picture} alt="Service 1"/>
            <h3>Web Development</h3>
            <p>We create stunning websites tailored to your needs.</p>
        </div>
        <div className="service">
            <img src={picture} alt="Service 2"/>
            <h3>IT Consulting</h3>
            <p>Expert advice to optimize your IT infrastructure.</p>
        </div>
        <div className="service">
            <img src={picture} alt="Service 3"/>
            <h3>App Development</h3>
            <p>Building mobile and web applications that perform.</p>
        </div>
        </div>
    </section>
    <section className="about">
        <h2>About Us</h2>
        <p>We are a leading IT company providing cutting-edge technology solutions to businesses. With a team of experts, we deliver exceptional services and support to help your business succeed.</p>
    </section>
    <footer>
        <p>&copy; 2023 IT Solution. All rights reserved.</p>
    </footer>
    </>
  )
}

export default Home;