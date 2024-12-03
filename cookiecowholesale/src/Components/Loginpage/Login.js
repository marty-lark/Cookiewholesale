import React from "react";
import './login.css'
import Logo from '../../image/logo1.PNG'

const Login = () => {
    return (
        <div id="main">
            <img src={Logo}></img>
            <h1>Wholesale Portal</h1>
            <div id="form">
                <form>
                    <input type="text" placeholder="Enter Username"></input>
                    <input type="password" placeholder="Enter Password"></input>
                    <button>Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;