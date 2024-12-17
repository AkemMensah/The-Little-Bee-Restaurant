import React from "react";
import * as images from '../images/index';
import "../styles/landingPage.css";
import { useNavigate } from "react-router-dom";
import { useRef } from 'react';
import { useState } from 'react';
// import Navbar from "./Navbar";


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
             {/* <Nav /> */}
        </div>
    );
}

// Menu Carousel
function Menu_items() {
    const carouselRef = useRef(null);

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <div className="category">
            <h1>We Serve You:</h1>
            <section className="carousel-container">
                <button className="scroll-button left" onClick={scrollLeft}>‹</button>
                <div className="carousel" ref={carouselRef}>
                    <a href="#">
                        <div className="item">
                            <h2>Breakfast</h2>
                            <img src={images.breakfast1} style={{height:210}} alt="Breakfast" />
                        </div>
                    </a>
                    <a href="#">
                        <div className="item">
                            <h2>Lunch</h2>
                            <img src={images.lunch} alt="Lunch" />
                        </div>
                    </a>
                    <a href="#">
                        <div className="item">
                            <h2>Dinner</h2>
                            <img src={images.diner} alt="Dinner" />
                        </div>
                    </a>
                    <a href="#">
                        <div className="item">
                            <h2>Brunch</h2>
                            <img src={images.snacks} alt="Brunch" />
                        </div>
                    </a>
                    <a href="#">
                        <div className="item">
                            <h2>A La Carte</h2>
                            <img src={images.chicken} style={{height:210}} alt="A La Carte" />
                        </div>
                    </a>
                </div>
                <button className="scroll-button right" onClick={scrollRight}>›</button>
            </section>
        </div>
    );
}


function LBody()
{
    return (
        <div className="display">
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
        </div>
    );
}

function WorkingHoursAndEvents() {
    const workingHours = [
        { day: 'Monday - Friday', hours: '8:00 AM - 10:00 PM' },
        { day: 'Saturday', hours: '9:00 AM - 11:00 PM' },
        { day: 'Sunday', hours: '10:00 AM - 9:00 PM' }
    ];

    const events = [
        { title: 'Wedding Receptions', icon: '💍' },
        { title: 'Corporate Events', icon: '🏢' },
        { title: 'Birthday Parties', icon: '🎉' },
        { title: 'Private Dinners', icon: '🍽️' },
        { title: 'Anniversary Celebrations', icon: '❤️' },
        { title: 'Graduation Parties', icon: '🎓' }
    ];
    

    return (
        <div className="working-hours-events-container">
            <div className="working-hours">
                <h2>Working Hours</h2>
                <ul>
                    {workingHours.map((entry, index) => (
                        <li key={index}>
                            <strong>{entry.day}:</strong> {entry.hours}
                        </li>
                    ))}
                </ul>
                <p >Let's Arrange For your Special Time Requests</p>
            </div>
            <div className="events">
                <h2>Supported Events</h2>
                <div className="event-list">
                    {events.map((event, index) => (
                        <div className="event-item" key={index}>
                            <span className="event-icon">{event.icon}</span>
                            <p>{event.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}



function About_Us() {
    const shots = [
        { src: images.restaurantBanner, alt: 'Image 1', title: 'The Place', description: 'Inspired by India in every aspect – from our silk wallpapers to our stately, fort-inspired door, celebrated designers Matthew and Paul of MSDO have artfully composed five uniquely Indian spaces within Little Bee. Drawing on décor that wends masterfully through the depths of the subcontinent, each visit to Little Bee promises a new adventure.' },
        { src: images.food, alt: 'Image 2', title: 'The Food', description: 'Blending a culinary philosophy that pays tribute to India’s rich legacy, culinary historian Pritha Sen and Executive Chef Pinaki Ray create an extensive menu offering both vegetarian and non-vegetarian dishes. Featuring niche ingredients sourced across the Subcontinent and South East Asia, a poetic and irreverent experience awaits.' },
        { src: images.Prince, alt: 'Image 3', title: 'The People', description: 'People passionate about Indian Cuisine. A celebrated revivalist of rare and bygone recipes. Pritha Sen brings her love of Indian cuisine to Singapore with recipes that span the length and breadth of the Subcontinent. Alongside our ever-talented Executive Chef, Pinaki Ray.' }
    ];

    return (
        <div className="little_bee_abt">
            <h2 className="abt_title">About Little Bee</h2>
            <div className="image-hover-container">
                {shots.map((shot, index) => (
                    <div className="image-hover-item" key={index}>
                        <div className="image-wrapper">
                            <img src={shot.src} alt={shot.alt} className="image" />
                            <div className="description">
                                <h2>{shot.title}</h2>
                                <p>{shot.description}</p>
                            </div>
                        </div>
                        <h2 className="title-bottom">{shot.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}


function About_Us_Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const shots = [
        { src: images.restaurantBanner, alt: 'Image 1', title: 'The Place', description: 'Inspired by India in every aspect...' },
        { src: images.food, alt: 'Image 2', title: 'The Food', description: 'Blending a culinary philosophy that pays tribute...' },
        { src: images.Prince, alt: 'Image 3', title: 'The People', description: 'People passionate about Indian Cuisine...' }
    ];

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? shots.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === shots.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="little_bee_carousel">
            <h2 className="abt_title">About Little Bee</h2>
            <div className="carousel-container">
                <button className="carousel-button left" onClick={handlePrev}>‹</button>
                <div className="carousel">
                    {shots.map((shot, index) => (
                        <div className={`carousel-item ${index === currentIndex ? 'active' : ''}`} key={index}>
                            <div className="image-wrapper-carousel">
                                <img src={shot.src} alt={shot.alt} className="image" />
                                <div className="description-carousel">
                                    <h2>{shot.title}</h2>
                                    <p>{shot.description}</p>
                                </div>
                            </div>
                            <h2 className="title-bottom">{shot.title}</h2>
                        </div>
                    ))}
                </div>
                <button className="carousel-button right" onClick={handleNext}>›</button>
            </div>
        </div>
    );
}









function LandingPage()
{
    return (
        <div id="landing-page-container">
            {/* <Navbar /> */}
            <LHeading />
            <Intro />
            <Menu_items />
            <LBody />
            <About_Us />
            <About_Us_Carousel />
            <WorkingHoursAndEvents />
        </div>
    );
}

export default LandingPage;
