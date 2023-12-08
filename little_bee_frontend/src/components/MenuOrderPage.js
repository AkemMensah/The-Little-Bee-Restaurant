import "../styles/menuOrder.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

async function submitAPI(form) {
    const response = await fetch("http://localhost:8000/order/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
    });
    if (response.ok) {
        // const data = await response.json();
        return true;
    }
    return false;
}

function Orderform({ form, setForm }) {
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const placeholders = {
        name: "Enter name",
        phone: "Enter phone number",
        address: "Enter address",
        menu: "Enter menu",
        request: "Any special request?",
        email: "Enter email",
    };

    useEffect(() => {
        if (success == true) {
            navigate("/confirm-order");
        }
    }, [success]);

    async function submitForm(e) {
        e.preventDefault();
        setSuccess(await submitAPI(form));
    }

    console.log(form);

    return (
        <div className="order">
            <h1>Make Your Order</h1>
            <form onSubmit={async (e) => await submitForm(e)}>
                <div className="order-form">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        htmlFor="name"
                        minLength="3"
                        placeholder={placeholders.name}
                        required
                        onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                        }
                    />
                </div>
                <div className="order-form">
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        htmlFor="phone"
                        placeholder={placeholders.phone}
                        required
                        onClick={(e) =>
                            setForm({ ...form, phone: e.target.value })
                        }
                    />
                </div>
                <div className="order-form">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        htmlFor="email"
                        name="email"
                        id="email"
                        placeholder={placeholders.email}
                        onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                        }
                    />
                </div>
                <div className="order-form">
                    <label htmlFor="address">Address:</label>
                    <input
                        type="text"
                        htmlFor="address"
                        name="address"
                        id="address"
                        placeholder={placeholders.address}
                        required
                        onChange={(e) =>
                            setForm({ ...form, address: e.target.value })
                        }
                    />
                </div>
                <div className="order-form">
                    <label htmlFor="menu">Menu:</label>
                    <input
                        name="menu"
                        id="menu"
                        type="text"
                        htmlFor="menu"
                        placeholder={placeholders.menu}
                        required
                        onChange={(e) =>
                            setForm({ ...form, menu: e.target.value })
                        }
                    />
                </div>
                <div className="order-form" id="btn-div">
                    <label htmlFor="request">Special Request:</label>
                    <input
                        name="request"
                        id="request"
                        type="text"
                        htmlFor="request"
                        placeholder={placeholders.request}
                        onChange={(e) =>
                            setForm({ ...form, request: e.target.value })
                        }
                    />
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
}

function MenuOrder() {
    const [form, setForm] = useState({});
    return (
        <>
            <Orderform form={form} setForm={setForm} />
        </>
    );
}

export default MenuOrder;
