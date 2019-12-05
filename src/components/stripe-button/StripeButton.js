import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey='pk_test_PhVynUbJ6b2qyc15VFw4vYFb00otfXLFeV';
  

 const onToken = token => {
   console.log(token);
   alert('Payment successful');
  };




  return (
    <StripeCheckout
    locale='en'
    label='Pay Now'
    name='Clothing ltd'
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