import orderPack from "../images/orderPack.jpg";
import "../styles/confirmOrder.css";
import React from "react";

function ConfirmOrder() {
  return (
    <div className="congrats">
    <div className="congrats-text">
      <h2>Thank you for choosing us! You can always count on us.</h2>
      <div className="mssg">
        <div className="word">
          <h1>Congrats!</h1>
          <p>Your Order is successful!</p>
        </div>
        <div className="img">
          <img src={orderPack} alt="congrats" />
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

export default ConfirmOrder;
