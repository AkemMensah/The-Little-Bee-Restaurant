import { useState } from "react";
import "../styles/booking.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function fetchAPI(date) {
    return ["00:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"];
}

async function submitAPI(form) {
    const response = await fetch("http://localhost:8000/reservation/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
    });

    if (response.ok) {
        const data = await response.json();
        return true;
    }
    return false;
}

function BookingForm({ form, setForm }) {
    const [availabilities, setAvailabilities] = useState([]);
    const [success, setSuccess] = useState(false);
    const [validForm, setValidForm] = useState(false);
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

    const isValidForm = () =>
        form?.customer_name?.length > 3 &&
        form?.phone &&
        form?.date &&
        form?.time &&
        form?.no_of_guests >= 1 &&
        form?.occasion &&
        isValidEmail();
    useEffect(() => {
        if (success == true) {
            navigate("/confirm-booking");
        }
    }, [success]);

    useEffect(() => {
        setValidForm(isValidForm());
    }, [form]);

    async function submitForm(e) {
        e.preventDefault();
        setSuccess(await submitAPI(form));
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
            <form onSubmit={async (e) => await submitForm(e)}>
                <div className="form-item">
                    <label htmlFor="customer_name">Name:</label>
                    <input
                        className="norm"
                        htmlFor="customer_name"
                        type="text"
                        placeholder={placeholders.customer_name}
                        id="customer_name"
                        required
                        onChange={(e) =>
                            setForm({ ...form, customer_name: e.target.value })
                        }
                    ></input>
                </div>
                <div className="form-item">
                    <label htmlFor="phone">Phone:</label>
                    <input
                        className="norm"
                        htmlFor="phone"
                        type="tel"
                        placeholder={placeholders.phone}
                        onChange={(e) =>
                            setForm({ ...form, phone: e.target.value })
                        }
                        id="phone"
                        required
                    ></input>
                </div>
                <div className="form-item">
                    <label htmlFor="email">Email:</label>
                    <input
                        className="norm"
                        htmlFor="email"
                        type="email"
                        id="email"
                        placeholder={placeholders.email}
                        onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                        }
                    ></input>
                </div>
                <div className="form-item">
                    <label htmlFor="res-date">Choose date:</label>
                    <input
                        className="select"
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
                        onChange={(e) =>
                            setForm({ ...form, time: e.target.value })
                        }
                    >
                        {availabilities.map((time) => (
                            <option value={time}>{time}</option>
                        ))}
                    </select>
                </div>
                <div className="form-item">
                    <label htmlFor="guests">Number of guests:</label>
                    <input
                        className="norm"
                        type="number"
                        id="guests"
                        name="guests"
                        min="1"
                        max="10"
                        placeholder={placeholders.guests}
                        onChange={(e) =>
                            setForm({ ...form, no_of_guests: e.target.value })
                        }
                    ></input>
                </div>
                <div className="form-item" id="occasion">
                    <label htmlFor="occasion">Occasion:</label>
                    <select
                        id="occasion"
                        name="occasion"
                        placeholder={placeholders.occasion}
                        className="select"
                        onChange={(e) =>
                            setForm({ ...form, occasion: e.target.value })
                        }
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
                            onChange={(e) =>
                                setForm({ ...form, special: e.target.value })
                            }
                        ></textarea>
                    </div>
                </div>
                <button
                    type="submit"
                    value="Make Reservation"
                    disabled={!validForm}
                    className="booking-btn"
                >
                    Make Reservation
                </button>
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
