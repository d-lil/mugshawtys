import React, { useState, useEffect } from "react";


export const ProductDisplay = () => (
  <section>
    <div className="product">
      <img
        src="https://nypost.com/wp-content/uploads/sites/2/2021/08/prison-love.jpg?resize=744,496&quality=75&strip=all"
        alt="Premium Subscription"
      />
      <div className="description">
        <h3>Premium Subscription</h3>
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

const Stripe = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed!");
    }

    if (query.get("canceled")) {
      setMessage(
        "Don't forget love isn't constrained by the law, don't let the man tell you what to do, buy a premium plan!"
      );
    }
  }, []);

  return message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay />
  );
}

export default Stripe;
