import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51NGXs7FAXUOYrBpZ9r0uapnlcxIQFGOv5eXKH4yjovOUSZEDyndK0toqYKYKJy0cikmRl4FGhsysDS1Flc8aGsWr00ysWf9Cei');

export default function Payment() {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: '{{CLIENT_SECRET}}',
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
};
