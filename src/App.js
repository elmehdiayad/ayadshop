import React from 'react';
import './App.css';

import {Route, Switch, Redirect } from 'react-router-dom';
import ShopPage from './pages/shop/shop-page.component'
import HomePage from './pages/homepage/homepage.component';
import Header from './component/header/header.component';
import Sign from './pages/sing/sign.component';
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user-reducer/user.actions'
import { selectCurrentUser } from './redux/user-reducer/user.selectors';
import { createStructuredSelector } from 'reselect'
import Checkout from './pages/checkout/checkout.component';
import { selectCollectionsPreview } from './redux/shop-page/shop-page.selector';



class App extends React.Component {
  
  unSubsucribeFromAuth = null;

  componentDidMount(){
    // this.unSubsucribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if(userAuth){
    //     const userRef = await createUserProfileDocument(userAuth);
    //     userRef.onSnapshot(snapShot => {
    //       setCurrentUser({
    //         id: snapShot.id,
    //         ...snapShot.data()
    //       })
    //     });    
    //   }
    //   setCurrentUser(userAuth);
    //   addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({title, items})));
    // });
  }

  componentWillUnmount(){
    this.unSubsucribeFromAuth();
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
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
