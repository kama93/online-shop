import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom'

import {selectCartItems} from '../../redux/cart/cart.selectors';
import ButtonComp from '../button/button.js';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';
import './cart.styles.scss';
import CartItem from '../cart-item/cart-item';

const Cart= ({cartItems, history, dispatch})=>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length?(
                cartItems.map(cartItem=>(
                <CartItem key={cartItem.id} item={cartItem}/>
            ))):
               ( <span className='empty-message'>Your cart is empty</span>
                           )}
        </div>
        <ButtonComp onClick={()=> {
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }}>
        GO TO CHECKOUT</ButtonComp>
    </div>
)

const mapStateToProps=createStructuredSelector({
    cartItems: selectCartItems
}) 

export default withRouter(connect(mapStateToProps)(Cart))