nvm use 18.13.0
npx create-react-app app
cd app
touch .env
npm i -E --save @stripe/react-stripe-js @stripe/stripe-js
mkdir src/components
mkdir src/components/Stripe
touch src/components/Stripe/index.jsx
touch src/components/Stripe/index.module.css
touch src/components/Stripe/CheckoutForm.jsx
touch src/components/Stripe/Subscription.jsx
touch src/components/Stripe/Subscription.module.css
touch src/components/Stripe/StripeElements.jsx