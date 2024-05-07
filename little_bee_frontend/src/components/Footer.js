import { Bee } from "../images";
import "../styles/footer.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faTwitter,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

// setting link icons
const pageLinks = [
    { name: "Home", link: "./index.html" },
    { name: "About", link: "./about.html" },
    { name: "Menu", link: "./menu.html" },
    { name: "Order Online", link: "./order-form.html" },
    { name: "Reserve a Table", link: "./login.html" },
];

// Defining link icons
const socialLinks = [
    { name: "Facebook", link: "https://www.facebook.com" },
    { name: "Instagram", link: "https://www.instagram.com" },
    { name: "Twitter", link: "https://www.twitter.com" },
    { name: "LinkedIn", link: "https://www.linkedin.com" },
];

// Defining the footer component
function Footer() {
    return (
        <footer>
            <div className="fLogo">
                <img width="150" src={Bee} alt="Bee" />
                <p>Little Bee Restaurant</p>
                
            </div>
            <div className="contact">
                <p>Address:</p>
                <p>Little Bee Restaurant</p>
                <p>P.O.Box C348</p>
                <p>Accra, Ghana, Lemon street</p>
                <p>Tel: +623-456-7890</p>
                <a href="littlebee@gmail.com">Email Us</a>
            </div>

            <div className="links">
                <p>HyperLinks:</p>
                <ul>
                    {pageLinks.map((link) => (
                        <li key={link.name}>
                            <a href={link.link}>{link.name}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="social">
                <p>Follow Us:</p>
                <ul>
                    <li>
                        <a href="https://www.facebook.com/">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com/">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

// exporting the footer component
export default Footer;
