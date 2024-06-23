import React from "react";
import * as images from '../images/index';
import "../styles/landingPage.css";
import { useNavigate } from "react-router-dom";

// Defining nav bar for the landing page
function Nav()
{
    const navigate = useNavigate();
    const handleClickHome = () =>
    {
        navigate("/home");
    };
    return (
        <nav className="navigate">
            <div className="logo">
                <img
                    src={images.littleBee}
                    alt="little Bee"
                    className="app-logo"
                    width="90"
                    height="60"
                />
                <h1>LITTLE BEE RESTAURANT</h1>
            </div>
            <ul className="llinks">
                <li>
                    <a href="/home">Home</a>
                </li>
                <li>
                    <a href="/home">Locations</a>
                </li>
                <li>
                    <a href="/home">Dine-in</a>
                </li>
                <li>
                    <a href="/order-form">Delivery</a>
                </li>
                <li className='reservations'>
                    <a href="/booking-form">Reservations</a>
                </li>
                <li className='order-online'>
                    <a href="/order-form">Order Online</a>
                </li>
            </ul>
        </nav>
    );
}

// Defining introductory text for the banner
function Intro()
{
    return (
        <div className="intro">
            <div className="intro-text">
                <h1>Savor the Taste, Indulge in the Experience: Welcome to Culinary Delights!</h1>
            </div>
        </div>
    );
}

// Defining the header for the landing page
function LHeading()
{
    return (
        <div className="lheading">
            <Nav />
            <Intro />
        </div>
    );
}

// Defining the body of the landing page
function LBody()
{
    return (
        <>
            <div className="category">
                <h1>We Serve You:</h1>
                <section className="body">

                    <a href="#">
                        <div className="item">
                            <h2>Breakfast</h2>
                            <img src={images.breakfast1} />

                        </div>
                    </a>

                    <a href="#">
                        <div className="item">
                            <h2>Lunch</h2>
                            <img src={images.lunch} />
                        </div>
                    </a>
                    <a href="#">
                        <div className="item">
                            <h2>Dinner</h2>
                            <img src={images.diner} />
                        </div>
                    </a>
                    <a href="#">
                        <div className="item">
                            <h2>Brunch</h2>
                            <img src={images.snacks} alt='snacks' />
                        </div>
                    </a>
                    <a href="#">
                        <div className="item">
                            <h2>A La Carte</h2>
                            <img src={images.chicken} alt='snacks' />
                        </div>
                    </a>
                </section>

                {/* <ul> */}
                {/* {socialLinks.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <a href={item.url} target="_blank">
                                            {item.name}
                                        </a>
                                    </li>
                                );
                            })} */}

                {/* </ul> */}
            </div>

            <div className="services">
                <p>What are you <br/> feeling today?</p>
                <div className="image">

                </div>
                <div className="buttons">
                    <button className="dine-in">
                        Dine in
                    </button>
                    <button className="delivery">
                        Delivery
                    </button>
                </div>
            </div>
            <div className="locations">
                <div className="osu">
                    <img src="" />
                    <h2>OSU</h2>
                    <p>
                        <span className='phone'>+233248943700</span>
                        <span className="text">Larma</span>
                    </p>
                </div>
            </div>
        </>
    );
}

// Defining the landing page component
function LandingPage()
{
    return (
        <div id="landing-page-container">
            <LHeading />
            <LBody />
        </div>
    );
}

// exporting the landing page
export default LandingPage;
