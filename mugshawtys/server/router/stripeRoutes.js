const express = require('express');
const stripe = require('stripe')('sk_test_51NGXs7FAXUOYrBpZ5fasB4Lxhj9MYTpJWBntzqtyo7s0GRMdIr97dI6d8Is4glrPPUdhTlatB7cMgOBbFFpZPiZP00YCcdimd8');

const router = express.Router();

router.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    customer_email: 'customer@example.com',
    submit_type: 'donate',
    billing_address_collection: 'auto',
    shipping_address_collection: {
      allowed_countries: ['US', 'CA'],
    },
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: '{{pr_10}}',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${DOMAIN}?success=true`,
    cancel_url: `${DOMAIN}?canceled=true`,
    automatic_tax: {enabled: true},
  });


  res.redirect(303, session.url);
});

module.exports = router;