import React from 'react'
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/logo/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import './header.styles.scss';
import CardDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user-reducer/user.selectors';
import { selectCartState } from '../../redux/cart-reducer/cart.selectors';
import {createStructuredSelector} from 'reselect'

const Header = ({currentUser, hidden}) => {
  return (
    <div className='header'>
      <Link className='logo-container' to ="/">
        <Logo className='logo'/>
      </Link>
      <div className='options'>
        <Link className='option' to="/shop">
          SHOP
        </Link>
        <Link className='option' to="/aboutUs">
          ABOUT US
        </Link>
        {
          currentUser ?
          (<div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>)
          :
          (<Link className='option' to="/sign"> SIGN IN </Link>)
        }
        <CartIcon/>
      </div>
        {
          hidden ?
          (null)
          :
          (<CardDropdown/>)
        }   
    </div>

  );
}

const mapStateToProps =  createStructuredSelector({
  currentUser : selectCurrentUser,
  hidden: selectCartState
});

export default connect(mapStateToProps)(Header);