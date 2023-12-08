import React from "react";
import { littleBee } from "../images";
import {
    reserve,
    homeshot,
    confirm1,
    confirm2,
    order,
} from "../images/index.js";
import "../styles/landingPage.css";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";



function Nav(){
    const navigate = useNavigate()

    const handleClickHome = () =>{
        navigate("/home")
    }
    return (
        <nav className="navigate">
            <div className="logo">
                <img
                    src={littleBee}
                    alt="little Bee"
                    className="app-logo"
                    width="90"
                    height="60"
                />
                <h1>LITTLE BEE RESTAURANT</h1>
            </div>
            <ul className="llinks">
                <li onClick={handleClickHome}>OrderOnline</li>
                <li onClick={handleClickHome}>Reserve A Table</li>
                <li onClick={handleClickHome}>HomePage</li>
            </ul>
        </nav>
    );
}

function Intro() {
    return (
        <div className="intro">
            <div className="intro-text">
                <h1>Discover The World of Little Bee Restaurant</h1>
                <p>
                    A portfolio project Designed to ensure the online presence
                    of the little Bee experience allowing customers to order
                    meals and book dables online.
                </p>
            </div>
        </div>
    );
}

function LHeading(){
    return (
        <div className="lheading">
            <Nav />
            <Intro />
        </div>
    );
}

function LBody() {
    return (
        <>
            <div className="body">
                <div>
                    <h2>Online Ordering Feature</h2>
                    <img src={order} />
                    <p>
                        This feature allows customers to order food on the
                        Little Bee web site which can be delivered to them in
                        the shortest possible time at a customer's request.
                    </p>
                </div>
                <div>
                    <h2>Table Reservation Feature</h2>
                    <img src={reserve} />
                    <p>
                        This feature allows customers to reserve a table for
                        their various occasionson the Little Bee web site. The
                        customer can choose a date and time and the tabel will
                        be reserved a ccording to the request.
                    </p>
                </div>
                <div>
                    <h2>The Home Page Feature</h2>
                    <img src={homeshot} />
                    <p>
                        This is the home page for the Little Bee restaurant. It
                        has various features to allow for various
                        functionalities in accessing various aspects of the web
                        application. Among the features are: The reserve a table
                        button, order online button etc.
                    </p>
                </div>
                <div>
                    <h2>Confirmation Feature</h2>
                    <img src={confirm1} />
                    <p>
                        This feature allows customers to know if their requests
                        were successful after they order a menu online or
                        reserve a table on the Little Bee website.
                    </p>
                </div>
            </div>
            <div className="labout">
                <div className="text1">
                    <div className="text2">
                        <h1>The project's inspiration</h1>
                        <p>
                            In the midst of my Holberton School journey, a spark
                            ignited—an idea for a Portfolio Project that
                            transcended a mere checkbox. It wasn't just about
                            meeting requirements; it was an opportunity to weave
                            my story into code. As days turned to weeks, lines
                            of code danced, forming the backbone of the project.
                            Challenges weren't just technical; they were
                            opportunities for deeper problem-solving. Bugs fixed
                            and features added became milestones in my
                            evolution. This project mirrored my growth,
                            reflecting the dedication to crafting software that
                            transcends functionality. It echoed my commitment to
                            the craft and the holistic learning experience at
                            Holberton. With lines of code neatly arranged, the
                            Portfolio Project came to life. It stood as a bridge
                            between theoretical knowledge and practical skills,
                            a testament to the transformative power of education
                            and the limitless possibilities that unfold when
                            creativity meets code. To delve into the heart of my
                            journey, explore the project here. It's more than a
                            project; it's a story waiting to be told.
                        </p>
                    </div>
                    <div className="connect">
                        <h1>Let's Conect on:</h1>
                        <ul>
                            {socialLinks.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <a href={item.url} target="_blank">
                                            {item.name}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <div className="video">
                    <h1> project video </h1>
                    <iframe
                        width="760"
                        height="500"
                        src="https://www.youtube.com/embed/ZJGkt4VEAKI?si=uqH3TgGQFUsBXXYP"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe>
                    <video src={video}
                    controls
                    // width="900"
                    // height="200"
                    />
                </div>
            </div>
        </>
    );
}

function LandingPage() {
    return (
        <div id="landing-page-container">
            <LHeading />
            <h1>App Features</h1>
            <LBody />
        </div>
    );
}

export default LandingPage;
