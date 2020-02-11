import React from 'react';



import './checkout-item.styles.scss';
import { connect } from 'react-redux';
import {removeItem, increaseQuantity, decreaseQuantity} from '../../redux/cart-reducer/cart.actions';


const CheckoutItem = ({cartItem, removeItem, increaseQuantity, decreaseQuantity}) => {
  const {imageUrl, name, quantity, price} = cartItem
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item'/>
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => decreaseQuantity(cartItem)}>&#10094;</div>
        <div className='value'>{quantity}</div>
        <div className='arrow' onClick={() => increaseQuantity(cartItem)}>&#10095;</div>
      </span>
      <span className='price'>${price}</span>
      <div className='remove-button' onClick={() => removeItem(cartItem)}>&#10005;</div>

    </div>
  )};

const mapDiscpatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item)),
  increaseQuantity: item => dispatch(increaseQuantity(item)),
  decreaseQuantity: item => dispatch(decreaseQuantity(item))
});

export default connect(null, mapDiscpatchToProps)(CheckoutItem);
