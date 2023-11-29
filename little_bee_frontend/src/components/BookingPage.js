import { useState } from "react";
import "../styles/booking.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function fetchAPI(date) {
  return ["00:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"];
}

function submitAPI(form) {
fetch("http://localhost:8000/reservation/", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
})
  .then((response) => {
    if (!response.ok) {
      return false;
    } else {
      return true;
    }
  })
  .catch((error) => {
    return false;
  });
}

function BookingForm({ form, setForm }) {
  const [availabilities, setAvailabilities] = useState([]);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const placeholders = {
    name: "Enter name",
    phone: "Enter phone number",
    date: "Sun Jul 25 2021",
    time: "16:00",
    guests: 1,
    occasion: "Select occasion",
    special: "Any request?",
    email: "Enter email",
  };

  const isValidEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(form.email);
  };

  const isInValidForm = (form) => {
    if (
      form.name === "" ||
      form.name.length < 3 ||
      form.phone === "" ||
      form.date === "" ||
      form.time === "" ||
      form.guests === 1 ||
      form.occasion === "" ||
      form.special === "" ||
      !isValidEmail()
    ) {
      return false;
    } else {
      return true;
    }
  };
  

  useEffect(() => {
    if (success == true) {
      navigate("/confirm-booking");
    }
  }, [success]);


  function submitForm(e) {
    e.preventDefault();
    setSuccess(submitAPI(form));

  }

  function checkAvailabilities(date) {
    setAvailabilities(fetchAPI(date));
  }

  function handleDateChange(e) {
    e.preventDefault();
    setForm({ ...form, date: e.target.value });
    checkAvailabilities(e.target.value);
  }
  return (
    <div className="booking">
      <h1>My Reservation</h1>
      <form onSubmit={submitForm}>
        <div className="details">
          <div className="form-item">
            <label htmlFor="customer_name">Name:</label>
            <input
              htmlFor="customer_name"
              type="text"
              placeholder={placeholders.customer_name}
              id="customer_name"
              required
              onChange={(e) => setForm({ ...form, customer_name: e.target.value })}
            ></input>
          </div>
          <div className="form-item">
            <label htmlFor="phone">Phone:</label>
            <input
              htmlFor="phone"
              type="tel"
              placeholder={placeholders.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              id="phone"
              required
            ></input>
          </div>
          <div className="form-item">
            <label htmlFor="email">Email:</label>
            <input
              htmlFor="email"
              type="email"
              id="email"
              placeholder={placeholders.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            ></input>
          </div>
          <div className="form-item">
            <label htmlFor="res-date">Choose date:</label>
            <input
              type="date"
              id="res-date"
              name="res-date"
              min="2021-07-22"
              max="2025-12-31"
              onChange={handleDateChange}
            ></input>
          </div>
          <div className="form-item">
            <label htmlFor="res-time">Choose time:</label>
            <select
              id="res-time"
              name="res-time"
              
              onChange={(e) => setForm({ ...form, time: e.target.value })}
            >
              {availabilities.map((time) => (
                <option value={time}>{time}</option>
              ))}
            </select>
          </div>
          <div className="form-item">
            <label htmlFor="guests">Number of guests:</label>
            <input
              type="number"
              id="guests"
              name="guests"
              min="1"
              max="10"
              placeholder={placeholders.guests}
              onChange={(e) => setForm({ ...form, guests: e.target.value })}
            ></input>
          </div>
          <div className="form-item">
            <label htmlFor="occasion">Occasion:</label>
            <select
              id="occasion"
              name="occasion"
              placeholder={placeholders.occasion}
              className="form-item"
              onChange={(e) => setForm({ ...form, occasion: e.target.value })}
            >
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="business">Business</option>
              <option value="other">Other</option>
              {form.occasion}
            </select>
          </div>
        {/* </div> */}
        <div className="form-other">
          <div className="form-text">
            <label htmlFor="special">Special Request</label>
            <textarea
              id="special"
              name="special"
              placeholder={placeholders.special}
              onChange={(e) => setForm({ ...form, special: e.target.value })}
            ></textarea>
          </div>
          <button
            className="form-item"
            type="submit"
            value="Make Reservation"
          >
            Make Reservation
          </button>
        </div>
        </div>
      </form>
    </div>
  );
}

function BookingPage() {
  const [form, setForm] = useState({
    customer_name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    no_of_guests: 1,
    occasion: "",
    special: "",
  });
  return (
    <div className="booking-page">
      <BookingForm form={form} setForm={setForm} />
    </div>
  );
}

export default BookingPage;