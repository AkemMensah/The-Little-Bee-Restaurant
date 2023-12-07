import { littleBee } from "../images";
import '../styles/landingPage.css';


function Nav()
{
    return (
        <nav className="navigate">
            <div className="logo">
                <img src={littleBee}
                    alt="little Bee"
                    className="app-logo"
                    width="90"
                    height="60"
                />
                <h1>LITTLE BEE RESTAURANT</h1>
            </div>
            <ul className="links">
                <li>OrderOnline</li>
                <li>Reserve A Table</li>
                <li>HomePage</li>

            </ul>
        </nav>

    )
}

function Intro()
{
    return (
        <div className="intro">
            <h1>Discover The World of Little Bee Restaurant</h1>
            <p>A portfolio project Designed to ensure the online presence of
                the little Bee experience allowing customers to order meals
                and book dables online.</p>
        </div>
    )
}

function LHeading()
{
    return (
        <div className="lheading">
            <Nav />
            <Intro />
        </div>
    )
}

function Body(){
    return(
        <div className="body">
            <div>
                <h2>Online Ordering Feature</h2>
                <img src=""/>
                <p>This feature allows customers to order food
                    on the Little Bee web site which can be delivered
                    to them in the shortest possible time at a customer's request.
                </p>
                </div>
            <div>
                <h2>Table Reservation Feature</h2>
                <img src=""/>
                <p>This feature allows customers to reserve a table
                    for their various occasionson the Little Bee web site. The customer can choose
                    a date and time and the tabel will be reserved a
                    ccording to the request.
                </p>
                </div>
            <div>
                <h2>Online Ordering Feature</h2>
                <img src=""/>
                <p>This is the home page for the Little Bee restaurant. It has various features
                    to allow for various functionalities in accessing various aspects of the web 
                    application. Among the features are: The reserve a table button, order online button
                    etc.
                </p>
                </div>
            <div>
                <h2>Confirmation Feature</h2>
                <img src=""/>
                <p>This feature allows customers to know if their requests were
                    successful after they order a menu online or reserve a table
                    on the Little Bee website.
                </p>
            </div>
        </div>
    )
}




export default LHeading;