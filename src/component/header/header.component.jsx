import React from 'react'
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/logo/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux'
import './header.styles.scss'

const Header = ({currentUser}) => {
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
      </div>     
    </div>

  );
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);