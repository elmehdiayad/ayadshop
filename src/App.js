import React from 'react';
import './App.css';

import {Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop-page.component'
import HomePage from './pages/homepage/homepage.component';
import Header from './component/header/header.component';
import Sign from './pages/sing/sign.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user-reducer/user.actions'



class App extends React.Component {
  
  unSubsucribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unSubsucribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        });    
      }
      setCurrentUser(userAuth);
    });
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
          <Route path='/sign' component={Sign}/>
        </Switch>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(null, mapDispatchToProps)(App);
