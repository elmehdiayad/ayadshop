import React from 'react';
import {connect} from 'react-redux';
import CustomButtoon from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component'
import './cart-dropdown.styles.scss';
import { selectCartItems } from '../../redux/cart-reducer/cart.selectors';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { changeCartState } from '../../redux/cart-reducer/cart.actions'




const CardDropdown = ({cartItems, history, dispatch}) => {
  return(
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {
          cartItems.length ?
          (cartItems.map(item => (<CartItem key={item.id} item = {item}/>))) :
          <span className='message'>Your cart is empty</span>
        }
      </div>
      <CustomButtoon onClick = {() => {history.push('/checkout'); dispatch(changeCartState());}}>GO TO CHECKOUT</CustomButtoon>
    </div>
  );
}

const mapStateToProps = createStructuredSelector(
  {cartItems: selectCartItems}
);
export default withRouter(connect(mapStateToProps)(CardDropdown));