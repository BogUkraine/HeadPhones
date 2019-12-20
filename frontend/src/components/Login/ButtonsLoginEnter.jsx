import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Redirect } from 'react-router-dom'

import checkUser from '../../actions/checkUser';

class ButtonsLoginEnter extends Component {
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
        formLogin.style.display = "none";
        formCreate.style.display = "flex";
    }

    handleClick(event) {
        event.preventDefault();
        const fieldLoginEnter = document.getElementById("fieldLoginEnter");
        const fieldPasswordEnter = document.getElementById("fieldPasswordEnter");
        const loginWarning = document.getElementById("loginWarnEnter");
        const passwordWarning = document.getElementById("passwordWarnEnter");
        
        if(fieldLoginEnter.checkValidity() && fieldLoginEnter.value !== ''){
            fieldLoginEnter.style.borderColor = "#ddd";
            loginWarning.style.display = "none";

            if(fieldPasswordEnter.checkValidity() && fieldPasswordEnter.value !== '') {
                fieldPasswordEnter.style.borderColor = "#ddd";
                passwordWarning.style.display = "none";
               
                axios.get('http://localhost:3210/checkUser', {
                    params: {
                        user_login: fieldLoginEnter.value,
                        user_password: fieldPasswordEnter.value
                    }
                    })
                    .then( (response) => {
                        if(response.data[0] !== undefined) {
                            this.props.changeUser(response.data[0])
                            this.setState({toHome: true})
                        }
                        else {
                            alert('Wrong password or login')
                            this.setState({toHome: false})
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    })

            }
            else {
                fieldPasswordEnter.style.borderColor = "#dc0000";
                passwordWarning.style.display = "block";
                event.preventDefault();
            }
        }
        else {
            fieldLoginEnter.style.borderColor = "#dc0000";
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
                id="toCreate"
                onClick={this.backClick}>
                    Create account
                </button>
                <button
                className="form__buttons_enter button"
                value="Enter"
                id="login"
                onClick={this.handleClick}>
                    Enter
                </button>
            </div>
        );
    }
}


export default connect(
	state => ({
        checkedUser: state.user,
	}),
    {
        user: checkUser,
        changeUser: (data) => ({
            type: "CHANGE_USER",
            payload: {
                user_id: data.user_id,
                user_login: data.user_login,
                user_password: data.user_password,
            }
        })
    }
)(ButtonsLoginEnter);