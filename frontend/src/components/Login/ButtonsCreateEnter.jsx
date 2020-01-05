import React, {Component} from 'react';
import { connect } from 'react-redux';

import axios from 'axios';
import { Redirect } from 'react-router-dom'

import checkUser from '../../actions/checkUser';
import addUser from '../../actions/addUser';

class ButtonsCreateEnter extends Component {
    constructor(props){
        super(props);
        this.state = {
            toHome: false,
        }

        this.handleClick = this.handleClick.bind(this);
        this.backClick = this.backClick.bind(this);
    }

    backClick(event) {
        event.preventDefault();
        const formLogin = document.getElementById("formLogin");
        const formCreate = document.getElementById("formCreate");
        formLogin.style.display = "flex";
        formCreate.style.display = "none";
    }

    handleClick(event) {
        event.preventDefault();
        const fieldLoginCreate = document.getElementById("fieldLoginCreate");
        const fieldPasswordCreate = document.getElementById("fieldPasswordCreate");
        const loginWarning = document.getElementById("loginWarnCreate");
        const passwordWarning = document.getElementById("passwordWarnCreate");
        
        if(fieldLoginCreate.checkValidity() && fieldLoginCreate.value !== ''){
            fieldLoginCreate.style.borderColor = "#ddd";
            loginWarning.style.display = "none";

            if(fieldPasswordCreate.checkValidity() && fieldPasswordCreate.value !== '') {
                fieldPasswordCreate.style.borderColor = "#ddd";
                passwordWarning.style.display = "none";

                this.props.addUser(fieldLoginCreate.value, fieldPasswordCreate.value);
                setTimeout(() => {
                    this.props.user.then((res) => {
                        console.log(res);
                        if(res !== undefined){
                            alert("This login is busy");
                        }
                        else {
                            this.props.checkUser(fieldLoginCreate.value, fieldPasswordCreate.value);
                            setTimeout(() => {
                                this.props.user
                                .then((res) => {
                                    if(res !== undefined) {
                                        this.props.changeUser(res);
                                        this.setState({toHome: true})
                                    }
                                    else {
                                        alert('Wrong password or login')
                                        this.setState({toHome: false})
                                    }})
                            }, 300)
                        }
                    })
                }, 300)
            }
            else {
                fieldPasswordCreate.style.borderColor = "#dc0000";
                passwordWarning.style.display = "block";
                event.preventDefault();
            }
        }
        else {
            fieldLoginCreate.style.borderColor = "#dc0000";
            loginWarning.style.display = "block";
            event.preventDefault();
        }
    }

    render() {
        return (
            <div className="form__buttons">
                {(this.state.toHome) ? <Redirect to='/main/home' /> : null}
                <button
                className="form__buttons_create button"
                value="Create account"
                id="toLogin"
                onClick={this.backClick}>
                    Back to Login
                </button>

                <button
                className="form__buttons_enter button"
                value="Enter"
                id="create"
                onClick={this.handleClick}>
                    Create
                </button>
            </div>
        );
    }
}


export default connect(
	state => ({
        user: state.user
    }),
    {
        checkUser: checkUser,
        addUser: addUser,
        changeUser: (data) => ({
            type: "CHANGE_USER",
            payload: {
                user_id: data.user_id,
                user_login: data.user_login,
                user_password: data.user_password,
            }
        })
	}
)(ButtonsCreateEnter);