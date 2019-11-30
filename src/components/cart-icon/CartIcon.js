import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assets/cart-icon-svg/CartIcon.svg';

import './CartIcon.scss';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItems } from '../../redux/cart/cart.selector';


const CartIcon = ( { toggleCartHidden, itemCount }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
);


const mapStateToProps = state => ({
  itemCount: selectCartItems(state) 
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()) 
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
