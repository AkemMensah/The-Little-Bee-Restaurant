import "../styles/navbar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as images from "../images/index";


// Defining nav bar for the landing page
// function Nav()
// {
//     const navigate = useNavigate();
//     const handleClickHome = () =>
//     {
//         navigate("/home");
//     };
//     return (
//         <nav className="navigate">
//             <div className="logo">
//                 <img
//                     src={images.littleBee}
//                     alt="little Bee"
//                     className="app-logo"
//                     width="90"
//                     height="60"
//                 />
//                 <h1>LITTLE BEE</h1>
//             </div>
//             <ul className="llinks">
//                 <li>
//                     <a href="/home">Menu</a>
//                 </li>
//                 <li>
//                     <a href="/home">Take-Away</a>
//                 </li>
//                 <li>
//                     <a href="/home">Dine-in</a>
//                 </li>
//                 <li>
//                     <a href="/order-form">Delivery</a>
//                 </li>
//                 <li className='reservations'>
//                     <a href="/booking-form">Reservations</a>
//                 </li>
//                 <li className='order-online'>
//                     <a href="/order-form">e-Vouchers</a>
//                 </li>
//                 <li className='family dropdown'>
//                     <button className="dropdown-button">Family</button>
//                     <div className="dropdown-content">
//                         <a href="/order-form" className="fam">Log In</a>
//                         <a href="/order-form" className="fam">Sign Up</a>
//                         <a href="/order-form" className="fam">Contact Us</a>
//                     </div>
//                 </li>
//             </ul>
//         </nav>
//     );
// }


function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen);
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
                <h1>LITTLE BEE</h1>
            </div>
            <button className="menu-toggle" onClick={handleToggleMenu}>
                ☰
            </button>
            <ul className={`llinks ${menuOpen ? 'open' : ''}`}>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/home">Take-Away</a></li>
                <li><a href="/home">Dine-in</a></li>
                <li><a href="/order-form">Delivery</a></li>
                <li className='reservations'><a href="/booking-form">Reservations</a></li>
                <li className='order-online'><a href="/order-form">e-Vouchers</a></li>
                <li className='family dropdown'>
                    <button className="dropdown-button">Family</button>
                    <div className="dropdown-content">
                        <a href="/order-form" className="fam">Log In</a>
                        <a href="/order-form" className="fam">Sign Up</a>
                        <a href="/order-form" className="fam">Contact Us</a>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;