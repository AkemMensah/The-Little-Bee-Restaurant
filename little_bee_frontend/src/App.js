import logo from "./logo.svg";
import "./App.css";
import Heading from "./components/Header";
import Main from "./components/MainBdy";
import Footer from "./components/Footer";
import BookingPage from "./components/ReservationPage";
import Orderform from "./components/MenuOrderPage";
import ConfirmBooking from "./components/ConfirmbookingPage";
import ConfirmOrder from "./components/ConfirmOrderPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";


function HomePage() {
  return (
    <>
    <Heading />
      <Main />
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/order-form" element={<Orderform />} />
        <Route path="/booking-form" element={<BookingPage />} />
        <Route path="/confirm-booking" element={<ConfirmBooking />} />
        <Route path="/confirm-order" element={<ConfirmOrder />} />
      </Routes>
    </>
  );
}

export default App;
