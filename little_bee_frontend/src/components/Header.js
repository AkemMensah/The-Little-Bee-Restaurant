import { lemonWord } from "../images";
import headerStyles from "../styles/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  return (
    <nav className="navlinks">
      <div className="images">
      <img
        alt="little-Lemon"
        className="app-logo"
        width="150"
        src={lemonWord}
      />
      <div className="bar"><FontAwesomeIcon icon={ faBars } /></div>
      </div>
      <input type="search" placeholder="Search item..." />
      <button>Search</button>

      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="./about.html">About</a>
        </li>
        <li>
          <a href="./menu.html">Menu</a>
        </li>
        <li>
          <a href="./orders.html">OrderOnline</a>
        </li>
        <li>
          <a href="./login.html">Login</a>
        </li>
      </ul>
    </nav>
  );
}

function Heading() {
  return (
    <div className="app-header">
      <p style={{ color: "green" }}>Welcome to Little Lemon Restaurant!</p>
      <Nav />
    </div>
  );
}

export default Heading;
