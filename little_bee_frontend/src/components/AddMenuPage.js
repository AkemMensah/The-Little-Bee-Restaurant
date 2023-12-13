import React, { useState } from "react";
import "../styles/addMenu.css";

// Component for adding menu to available menus
function AddMenu({ form, setForm }) {
    const [success, setSuccess] = useState(false);

    // func that submits menu item to backend database
    function submitAPI(form) {
        // using fetch API
        fetch("http://localhost:8000/menu/", {
            method: "POST",
            headers: { "content-type": "application/json" },
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

    // Check if the post method was a success
    function checkSuccess(success) {
        if (success == true) {
            alert("Menu added successfully");
        } else {
            alert("Menu Not added");
        }
    }

    // submitForm funct.
    function submitForm(e) {
        e.preventDefault();
        setSuccess(submitAPI(form));
    }

    // console.log(form);
    return (
        <div className="add-menu">
            <h1>Add A New Menu To List</h1>
            <form>
                <div className="menu-item">
                    <label htmlFor="image">Upload Image:</label>
                    <input
                        type="file"
                        alt="menu image"
                        accept="image/*"
                        id="image"
                        htmlFor="image"
                        placeholder="Add image"
                        required
                        onChange={(e) =>
                            setForm({ ...form, image: e.target.value })
                        }
                    />
                </div>
                <div className="menu-item">
                    <label htmlFor="name">Menu Name:</label>
                    <input
                        type="text"
                        id="name"
                        htmlFor="name"
                        placeholder="Enter Menu Name"
                        required
                        onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                        }
                    />
                </div>
                <div className="menu-item">
                    <label htmlFor="description">Menu Description:</label>
                    <textarea
                        type="text"
                        id="description"
                        htmlFor="description"
                        placeholder="Description"
                        required
                        onChange={(e) =>
                            setForm({ ...form, description: e.target.value })
                        }
                    />
                </div>
                <div className="menu-item">
                    <label htmlFor="menu-price">Menu Price:</label>
                    <input
                        type="text"
                        id="menu-price"
                        htmlFor="menu-price"
                        placeholder="Enter Price"
                        required
                        onChange={(e) =>
                            setForm({ ...form, price: e.target.value })
                        }
                    />
                </div>
                <input type="submit" value="Add Menu" />
            </form>
        </div>
    );
}

// Menu page component
function AddMenuPage() {
    // Define a use state hook to hold form state
    const [form, setForm] = useState({});

    return (
        <div className="menu-page">
            <AddMenu form={form} setForm={setForm} />
        </div>
    );
}

// exporting the menu page component
export default AddMenuPage;
