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

                axios.get('http://localhost:3210/checkLogin', {
                    params: {
                        user_login: fieldLoginCreate.value
                    }
                    })
                    .then( (response) => {
                        if(response.data[0] !== undefined) {
                            alert('This login is busy, choose another one')
                            this.setState({toHome: false})
                        }
                        else {
                            axios.post('http://localhost:3210/addUser', {
                                user_login: fieldLoginCreate.value,
                                user_password: fieldPasswordCreate.value
                            })
                            .then( (response) => {
                                
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                            
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    })

                setTimeout(() => {
                    axios.get('http://localhost:3210/checkUser', {
                    params: {
                        user_login: fieldLoginCreate.value,
                        user_password: fieldPasswordCreate.value
                    }
                    })
                    .then( (response) => {
                        console.log('get', response.data)
                        if(response.data[0] !== undefined) {
                            this.props.changeUser(response.data[0])
                            this.setState({toHome: true})
                        }
                        else {
                            alert('Wrong password or login')
                            this.setState({toHome: false})
                        }
                        console.log(this.state.toHome)
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
                }, 500)

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
      checkedUser: state.checkUser
    }),
    {
        user: checkUser,
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