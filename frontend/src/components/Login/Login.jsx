import React, { Component } from 'react';

import Form from './Form';

import logo from '../../images/logo.png';
class Login extends Component {

    componentDidMount() {
        const btnToLogin = document.getElementById('toLogin');
        const btnToCreate = document.getElementById('toCreate');
        const formCreate = document.getElementById('formCreate');
        const formLogin = document.getElementById('formLogin');

        const LoginFieldEnter = document.getElementById('loginEnter');
        const PassFieldEnter = document.getElementById('passEnter');
        const LoginFieldCreate = document.getElementById('loginCreate');
        const PassFieldCreate = document.getElementById('passCreate');

        btnToCreate.addEventListener("click", (event) => {
            event.preventDefault();
            formCreate.style.display = "flex";
            formLogin.style.display = "none";
        });

        btnToLogin.addEventListener("click", (event) => {
            event.preventDefault();
            formCreate.style.display = "none";
            formLogin.style.display = "flex";
        });
    }

    render () {
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
}

export default Login;