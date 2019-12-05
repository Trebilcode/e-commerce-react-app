import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector';
import './Checkout.scss';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import StripeCheckout from '../../components/stripe-button/StripeButton';



const Checkout = ({ cartItems, total }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-blocks'>
        <span>Product</span>
      </div>
      <div className='header-blocks'>
        <span>Description</span>
      </div>
      <div className='header-blocks'>
        <span>Quantity</span>
      </div>
      <div className='header-blocks'>
        <span>Price</span>
      </div>
      <div className='header-blocks'>
        <span>Remove</span>
      </div>
    </div>
    {
      cartItems.map(cartItem =>(
        <CheckoutItem 
        key={cartItem.id}
        cartItem={cartItem} 
        />
      ))
      
    }
    <div className='total'>
      <span>TOTAL = ${total}</span>
    </div>
    <div className='test-warning'>
      *Use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 -Exp: 01/20 -CVV: 123
    </div>
    <StripeCheckout price={total}/>
  </div>

);


const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps)(Checkout);