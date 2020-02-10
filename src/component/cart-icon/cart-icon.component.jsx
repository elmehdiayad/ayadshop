import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {connect} from 'react-redux';
import {changeCartState} from '../../redux/cart-reducer/cart.actions';
import './cart-icon.styles.scss';
import { selectCartItemsCount } from '../../redux/cart-reducer/cart.selectors';


const CartIcon = ({changeCartState, itemCount}) => {
  
  return (
    <div className='cart-icon' onClick={changeCartState}>
      <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'>
        { itemCount }
      </span> 
      
    </div>
  );
}

const mapDispatchToProps = dispatsh => ({
  changeCartState : () => dispatsh(changeCartState())
});

const mapStateToProps = state => (
  {
    itemCount: selectCartItemsCount(state)
  }
)
export default connect(mapStateToProps ,mapDispatchToProps)(CartIcon);