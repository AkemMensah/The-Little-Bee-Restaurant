// import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./components/LandingPage";
import Heading from "./components/Header";
import Main from "./components/MainBody";
import Footer from "./components/Footer";
import BookingPage from "./components/BookingPage";
import Orderform from "./components/MenuOrderPage";
import ConfirmBooking from "./components/ConfirmBookingPage";
import ConfirmOrder from "./components/ConfirmOrderPage";
import AddMenuPage from "./components/AddMenuPage";
import { Routes, Route } from "react-router-dom";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage() {
    return (
        <>
            <Heading />
            <Main />
        </>
    );
}

function LandingPageElements() {
    return (
        <>
            <LandingPage />

        </>
    );
}

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<LandingPageElements />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/order-form" element={<Orderform />} />
                <Route path="/booking-form" element={<BookingPage />} />
                <Route path="/confirm-booking" element={<ConfirmBooking />} />
                <Route path="/confirm-order" element={<ConfirmOrder />} />
                <Route path="/add-menu" element={<AddMenuPage />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
