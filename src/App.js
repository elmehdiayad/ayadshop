import React from 'react';
import './App.css';

import {Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop-page.component'
import HomePage from './pages/homepage/homepage.component';
import Header from './component/header/header.component';
import Sign from './pages/sing/sign.component';
import {auth} from './firebase/firebase.utils';



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser : null
    };
  }

  unsubsucribeFromAuth = null;

  componentDidMount(){
    this.unsubsucribeFromAuth = auth.onAuthStateChanged(user => {this.setState({currentUser : user}); console.log(user)});
  }

  componentWillUnmount(){
    this.unsubsucribeFromAuth();
  }
  render(){
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>  
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/sign' component={Sign}/>
        </Switch>
      </div>
    );
  }
}

export default App;
