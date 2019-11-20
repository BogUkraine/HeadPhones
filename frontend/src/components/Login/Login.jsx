import React from 'react';

import Form from './Form';

import logo from '../../images/logo.png';
const Login = () => {
	return (
        <div className="login">
            <div className="login__left">
                <div className="left__logo_wrapper">
                    <img className="left__logo_image" src={logo} alt="Logo" />
                </div>
            </div>
            <Form />
        </div>
	);
}

export default Login;