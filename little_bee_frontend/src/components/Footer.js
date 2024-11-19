import { Bee } from "../images";
import "../styles/footer.css";
import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//     faFacebook,
//     faInstagram,
//     faTwitter,
//     faLinkedin,
// } from "@fortawesome/free-brands-svg-icons";

// const pageLinks = [
//     { name: "Home", link: "./index.html" },
//     { name: "About", link: "./about.html" },
//     { name: "Menu", link: "./menu.html" },
//     { name: "Order Online", link: "./order-form.html" },
//     { name: "Reserve a Table", link: "./login.html" },
// ];

// const socialLinks = [
//     { name: "Facebook", link: "https://www.facebook.com" },
//     { name: "Instagram", link: "https://www.instagram.com" },
//     { name: "Twitter", link: "https://www.twitter.com" },
//     { name: "LinkedIn", link: "https://www.linkedin.com" },
// ];

// function Footer() {
//     return (
//         <footer>
//             <div className="fLogo">
//                 <img width="150" src={Bee} alt="Bee" />
//                 <p>Little Bee Restaurant</p>
                
//             </div>
//             <div className="contact">
//                 <p>Address:</p>
//                 <p>Little Bee Restaurant</p>
//                 <p>P.O.Box C348</p>
//                 <p>Accra, Ghana, Lemon street</p>
//                 <p>Tel: +23354-749-5692</p>
//                 <a href="littlebee@gmail.com">Email Us</a>
//             </div>

//             <div className="links">
//                 <p>HyperLinks:</p>
//                 <ul>
//                     {pageLinks.map((link) => (
//                         <li key={link.name}>
//                             <a href={link.link}>{link.name}</a>
//                         </li>
//                     ))}
//                 </ul>
//             </div>

//             <div className="social">
//                 <p>Follow Us:</p>
//                 <ul>
//                     <li>
//                         <a href="https://www.facebook.com/">
//                             <FontAwesomeIcon icon={faFacebook} />
//                         </a>
//                     </li>
//                     <li>
//                         <a href="https://www.instagram.com/">
//                             <FontAwesomeIcon icon={faInstagram} />
//                         </a>
//                     </li>
//                     <li>
//                         <a href="https://www.twitter.com/">
//                             <FontAwesomeIcon icon={faTwitter} />
//                         </a>
//                     </li>
//                     <li>
//                         <a href="https://www.linkedin.com/">
//                             <FontAwesomeIcon icon={faLinkedin} />
//                         </a>
//                     </li>
//                 </ul>
//             </div>
//         </footer>
//     );
// }





function Footer() {
    return (
        <footer className="footer">
            <div className="footer-section social-media">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
            <div className="footer-container">
                <div className="footer-section about">
                    <h3>Little Bee Restaurant</h3>
                    <p>
                        Experience the taste of home with every dish. We serve you with the best selection of 
                        international and local cuisine, prepared with love and fresh ingredients.
                    </p>
                </div>
                <div className="footer-section links">
                    <h4>Quick Links</h4>
                    <ul className="link-items">
                        <li><a href="/home">Home</a></li>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/order-form">e-Voucher</a></li>
                        <li><a href="/booking-form">Reservations</a></li>
                        <li><a href="/booking-form">Delivery</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </div>
                <div className="footer-section contact">
                    <h4>Contact Us</h4>
                    <p><i className="fas fa-phone"></i> +233 547 495 692</p>
                    <p><i className="fas fa-envelope"></i>littlebee@gmail.com</p>
                    <p><i className="fas fa-map-marker-alt"></i> Accra, Ghana</p>
                </div>
                
            </div>
            
            <div className="footer-bottom">
                <p>© 2024 Little Bee Restaurant. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

// export default Footer;




export default Footer;
