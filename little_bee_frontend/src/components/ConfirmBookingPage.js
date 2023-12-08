import table from "../images/CTA.png";
import "../styles/confirmBooking.css";
import React from "react";

function ConfirmBooking() {
  return (
    <div className="congrats">
    <div className="congrats-text">
      <h2>Thank you for choosing us! You can always count on us.</h2>
      <div className="mssg">
        <div className="word">
          <h1>Congrats!</h1>
          <p>Your reservation is confirmed!</p>
        </div>
        <div className="img">
          <img src={table} alt="congrats" />
        </div>
      </div>
      </div>
      <div className="bye">
        <p>See you soon!</p>
        <a href="/"><button>Back to Home</button></a>
      </div>
    </div>
  );
}

export default ConfirmBooking;
