const express = require("express");
const cors = require('cors');
require('dotenv').config();
// This is your test secret API key.
const STRIPE_SK = process.env.STRIPE_SK || 'sk_test_51MXm0bAbd5y5rSxyu5s3zO3qQwc1ytcWhPjf4U8d19IZUlfZgL0ggp7JqxX5vbpfD6mKT574nazbZeS7vJntV58500XDR7slNH';
const stripe = require("stripe")(STRIPE_SK);

const PORT = 3001;

const app = express();
app.use(cors({origin: 'http://localhost:3000'}));
app.use(express.static("public"));
app.use(express.json());

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.listen(PORT, () => console.log(`Node server listening on port ${PORT}!`));