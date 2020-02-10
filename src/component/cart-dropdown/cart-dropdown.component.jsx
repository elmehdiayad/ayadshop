import React from 'react';
import CustomButtoon from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';



const CardDropdown = () => {
  return(
    <div className='cart-dropdown'>
      <div className='cart-items'/>
      <CustomButtoon>GO TO CHECKOUT</CustomButtoon>
    </div>
  );
}

export default CardDropdown;