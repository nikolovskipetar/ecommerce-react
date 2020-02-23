import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';

import Homepage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";


function App() {
  return (
    <div>
      <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
