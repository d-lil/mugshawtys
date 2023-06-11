import React, { useState, useEffect } from "react";
import "./App.css";


const ProductDisplay = () => (
  <section>
    <div className="product">
      <img
        src="https://static01.nyt.com/images/2019/03/11/magazine/0317Mag-Tip-1/0317Mag-Tip-1-superJumbo.jpg"
        alt="Love"
      />
      <div className="description">
      <h3>Premium Plan!</h3>
      <h5>$10.00</h5>
      </div>
    </div>
    <form action="/create-checkout-session" method="POST">
      <button type="submit">
        Checkout
      </button>
    </form>
  </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function Premium() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Congratulations on going premium find your new mugshawty!");
    }

    if (query.get("canceled")) {
      setMessage(
        "Don't give up on love and let the man win."
      );
    }
  }, []);

  return message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay />
  );
}

