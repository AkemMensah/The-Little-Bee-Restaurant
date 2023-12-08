import { littleBee } from "../images";
import "../styles/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom'
import React from "react";
function Nav() {
  const navigate = useNavigate();

  const handleOrders = () => {
    navigate("/order-form")
  }

  return (
    <nav className="navlinks">
      <div className="images">
      <img
        alt="little Bee"
        className="app-logo"
        width="90"
        height="60"
        src={littleBee}
      />
      <div className="bar"><FontAwesomeIcon icon={ faBars } /></div>
      </div>
      <input type="search" placeholder="Search item..." />
      <button>Search</button>

      <ul>
        <li onClick={handleOrders}>
          Home
        </li>
        <li onClick={handleOrders}>
          About
        </li>
        <li onClick={handleOrders}>
          Menu
        </li>
        <li onClick={handleOrders}>
          OrderOnline
        </li>
        <li>
          Login
        </li>
      </ul>
    </nav>
  );
}

function Heading() {
  return (
    <div className="app-header">
      <p style={{ color: "green" }}>Welcome to Little Bee Restaurant!</p>
      <Nav />
    </div>
  );
}

export default Heading;
