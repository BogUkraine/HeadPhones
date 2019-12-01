import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import checkUser from '../../actions/checkUser';

class ButtonsLoginEnter extends Component {
    constructor(props){
        super(props);
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
                this.props.user(fieldLoginEnter.value, fieldPasswordEnter.value);   

                
                if(this.props.checkedUser.user_id === "error"){
                    event.preventDefault();
                    alert("Wrong Login or Password");
                }
                else {
                    console.log(this.props.checkedUser);
                    console.log('ok))0)');
                }

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
                <button
                className="form__buttons_create button"
                value="Create account"
                id="toCreate"
                onClick={this.backClick}>Create account</button>
                <NavLink to="/home">
                    <button
                    className="form__buttons_enter button"
                    value="Enter"
                    id="login"
                    onClick={this.handleClick}
                    >
                    Enter
                    </button>
                </NavLink>
            </div>
        );
    }
}


export default connect(
	state => ({
        checkedUser: state.user
	}),
    {
        user: checkUser,
    }
)(ButtonsLoginEnter);