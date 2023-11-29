import { lemon } from "../images";
import footerStyles from "../styles/footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";


function Info() {
  return (
    <div className="footer">
      <div className="fLogo">
        <img width="150" src={ lemon } alt="lemon" />
        <a href="littlelemon@gmail.com">Email Us</a>
      </div>
      <div className="contact">
        <p>Address:</p>
        <p>Little Lemon Restaurant</p>
        <p>P.O.Box C348</p>
        <p>Chicago, USA Lemon street</p>
        <p>Tel: +623-456-7890</p>
      </div>

      <div className="links">
      <p>HyperLinks:</p>
        <ul>
          <li>
            <a href="./index.html">Home</a>
          </li>
          <li>
            <a href="./about.html">About</a>
          </li>
          <li>
            <a href="./menu.html">Menu</a>
          </li>
          <li>
            <a href="./orders.html">Order Online</a>
          </li>
          <li>
            <a href="./login.html">Reserve a table</a>
          </li>
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
    </div>
  );
}

function Footer() {
  return (
    <>
      <Info />
    </>
  );
}

export default Footer;
