import React, { useEffect } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';

import './App.css';

import Homepage from './pages/homepage/homepage_component';
import ShopPage from './pages/shoppage/shop.js';
import CheckoutPage from './pages/checkout/checkout.js';
import Header from './components/header/header.js';
import SignInUp from './pages/sign-in-sign-up/sign-in-sign-up.js';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import { setCurrentUser} from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';

function App ({setCurrentUser, currentUser}) {
    
    useEffect(() => {
        const unsubscribeFromAuth= auth.onAuthStateChanged( async userAuth => {
            if (userAuth){
              const userRef= await createUserProfileDocument(userAuth);
              
              userRef.onSnapshot(snapShot => {
                setCurrentUser(
                  {id:snapShot.id,
                  ...snapShot.data()})
              })
            } 


            setCurrentUser(userAuth);
            });
            return () => {
              unsubscribeFromAuth();
            }
          }, []);

   


  return (
    <div>
        <Header/>
        <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route path='/shop' component={ShopPage}/>
            <Route path='/checkout' component={CheckoutPage}/>
            <Route exact path='/signin' render={()=>currentUser? (<Redirect to='/'/>): (<SignInUp/>)}/>
        </Switch>
    </div>
  );
}

const mapStateToProps= createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => {
  return ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
