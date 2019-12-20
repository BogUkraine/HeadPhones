import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import checkUser from '../../actions/checkUser';
import addUser from '../../actions/addUser';

class ButtonsCreateEnter extends Component {
    constructor(props){
        super(props);
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

                this.props.user(fieldLoginCreate.value, fieldPasswordCreate.value);   
                
                if(this.props.checkedUser.user_id === "error"){
                    event.preventDefault();
                    alert("Wrong Login or Password");
                }
                else {
                    this.props.addUser(fieldLoginCreate.value, fieldPasswordCreate.value);  
                    console.log(this.props.checkedUser);
                    console.log('ok))0)');
                }

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
                <button
                className="form__buttons_create button"
                value="Create account"
                id="toLogin"
                onClick={this.backClick}>Back to Login</button>
                <NavLink to="/home">
                    <button
                    className="form__buttons_enter button"
                    value="Enter"
                    id="create"
                    onClick={this.handleClick}
                    >
                    Create
                    </button>
                </NavLink>
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
	}
)(ButtonsCreateEnter);