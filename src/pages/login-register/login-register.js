import React from "react";
import './login-register.scss';

import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";

//functional component
const LoginRegister = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn/>
        <SignUp/>
    </div>
);


export default LoginRegister;
