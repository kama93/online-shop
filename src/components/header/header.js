import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils.js';
import CartIcon from '../../components/cart.icon/cart.icon.js';
import Cart from '../cart/cart.js';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles';


const Header =({currentUser, hidden})=>(
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>SHOP</OptionLink>
            <OptionLink  to='/shop'>CONTACT</OptionLink>
            {currentUser ? (
        <OptionLink as='div' onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to='/signin'>
          SIGN IN
        </OptionLink>
      )}
        <CartIcon/>
        </OptionsContainer>
        {hidden? null: <Cart/>}
    </HeaderContainer>

 )


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});
export default connect(mapStateToProps)(Header);