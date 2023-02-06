import Subscription from './Subscription.jsx';
// import StripeElements from './StripeElements.jsx';

const styles = { 
  'text-align': 'center'
 };

export default function Stripe() {
  
  return (
    <div style={styles}>
      <Subscription />
      {/* <StripeElements /> */}
    </div>
  );
};
