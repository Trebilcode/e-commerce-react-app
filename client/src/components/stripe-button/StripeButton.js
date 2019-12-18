import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey='pk_test_PhVynUbJ6b2qyc15VFw4vYFb00otfXLFeV';
  

 const onToken = token => {
   console.log(token);
   axios.post('/payment', {
    amount: priceForStripe,
    token
   })
   .then(response => {
     alert('Payment successful')
   })
   .catch(error => {
     console.log('Payment error: ', JSON.parse(error));
     alert('There was an issue with your payment, please use the provided test credit card info')
   })
  };




  return (
    <StripeCheckout
    locale='en'
    label='Pay Now'
    name='Trebilcode Clothing ltd'
    billingAddress
    shippingAddress
    image='https://svgshare.com/i/CUz.svg'
    description={`Your total is $${price}`}
    amount={priceForStripe}
    panelLabel='Pay Now'
    token={onToken}
    stripeKey={publishableKey}
    
    />
  );
}

export default StripeCheckoutButton;