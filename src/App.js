import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';

import Homepage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import LoginRegister from "./pages/login-register/login-register";


function App() {
  return (
    <div>
      <Header/>
      <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={ShopPage}/>
          <Route exact path='/signin' component={LoginRegister}/>

      </Switch>
    </div>
  );
}

export default App;
