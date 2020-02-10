import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {connect} from 'react-redux';
import {changeCartState} from '../../redux/cart-reducer/cart.actions';
import './cart-icon.styles.scss';


const CartIcon = ({changeCartState}) => {
  return (
    <div className='cart-icon' onClick={changeCartState}>
      <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'>0</span> 
    </div>
  );
}

const mapDispatchToProps = dispatsh => ({
  changeCartState : () => dispatsh(changeCartState())
});
export default connect(null ,mapDispatchToProps)(CartIcon);