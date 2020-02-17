import React from 'react';
import './App.css';

import {Route, Switch, Redirect } from 'react-router-dom';
import ShopPage from './pages/shop/shop-page.component'
import HomePage from './pages/homepage/homepage.component';
import Header from './component/header/header.component';
import Sign from './pages/sing/sign.component';
import {connect} from 'react-redux'
import { selectCurrentUser } from './redux/user-reducer/user.selectors';
import { createStructuredSelector } from 'reselect'
import Checkout from './pages/checkout/checkout.component';
import { selectCollectionsPreview } from './redux/shop-page/shop-page.selector';
import { checkUserSession } from './redux/user-reducer/user.actions';



class App extends React.Component {
  
  componentDidMount(){
    const {checkUserSession} = this.props;
    checkUserSession()
  }

  render(){
    return (
      <div className="App">
        <Header/>  
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/checkout' component={Checkout}/>
          <Route exact path='/sign' render = {() => this.props.currentUser? (<Redirect to = '/'/>):(<Sign />)}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsPreview
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => (dispatch(checkUserSession()))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
