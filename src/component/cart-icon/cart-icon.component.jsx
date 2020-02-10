import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {connect} from 'react-redux';
import {changeCartState} from '../../redux/cart-reducer/cart.actions';
import './cart-icon.styles.scss';


const CartIcon = ({changeCartState, cartItems}) => {
  
  const calculate = () => {
    var count = 0;
    for(let item of cartItems){
      count += item.quantity;
    }
    return count;
  }
  return (
    <div className='cart-icon' onClick={changeCartState}>
      <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'>
        { calculate() }
      </span> 
      
    </div>
  );
}

const mapDispatchToProps = dispatsh => ({
  changeCartState : () => dispatsh(changeCartState())
});

const mapStateToProps = ({cart:{cartItems}}) => (
  {cartItems}
)
export default connect(mapStateToProps ,mapDispatchToProps)(CartIcon);