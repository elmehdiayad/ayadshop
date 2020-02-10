import React from 'react';
import {connect} from 'react-redux';
import CustomButtoon from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component'
import './cart-dropdown.styles.scss';




const CardDropdown = ({cartItems}) => {
  return(
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {
          cartItems.map(item => (<CartItem key={item.id} item = {item}/>))
        }
      </div>
      <CustomButtoon>GO TO CHECKOUT</CustomButtoon>
    </div>
  );
}

const mapStateToProps = ({cart: {cartItems}}) => (
  {cartItems}
);
export default connect(mapStateToProps)(CardDropdown);