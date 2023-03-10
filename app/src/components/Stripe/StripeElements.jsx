import styles from './StripeElemnts.module.css';
import React, { useState, useEffect } from "react";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm.jsx';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const STRIPE_PK = process.env.STRIPE_PK || 'pk_test_51MXm0bAbd5y5rSxy9Z95DQcLi2OI0NNqAuTlrCWmxgQOndYPQw2rl9e6n6u5N0guFMBUpGMibrvbaIBDjUoOHaRH00pe9bBDpb';
const stripePromise = loadStripe(STRIPE_PK);

export default function StripeElemnts() {

  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    const url = 'http://localhost:3001';
    fetch(url + "/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div>
      {clientSecret && (<>
        <h2>Checkout</h2>
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </>)}
    </div>
  );
};
