import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';

import Homepage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import LoginRegister from "./pages/login-register/login-register";

import {auth} from "./firebase/firebase";


class App extends React.Component {
    constructor() {
        super();

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({currentUser: user})
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }


    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact path='/' component={Homepage}/>
                    <Route exact path='/shop' component={ShopPage}/>
                    <Route exact path='/signin' component={LoginRegister}/>
                </Switch>
            </div>
        );
    }
}

export default App;
