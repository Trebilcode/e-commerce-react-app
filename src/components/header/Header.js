import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { auth } from 'firebase';


import { ReactComponent as Logo } from '../../assets/crown-svg/crown.svg';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { LogoContainer, OptionsContainer, OptionLink, HeaderContainer } from './Header.styles';



const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer  to='/'>
      <Logo className='logo' />  
    </LogoContainer>
    <OptionsContainer> 
      <OptionLink 
      to='/shop'>
        SHOP 
      </OptionLink>
      <OptionLink 
       to='/contact'>
        CONTACT
      </OptionLink> 
      {
        currentUser ?
          <OptionLink as='div' onClick={() => auth().signOut()}>SIGN OUT</OptionLink> :
          <OptionLink  to='/signin'>SIGN IN</OptionLink>
      }
      <CartIcon />
    </OptionsContainer>
    {
      !hidden && <CartDropdown /> 
    }
    
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});
  



export default connect(mapStateToProps)(Header);