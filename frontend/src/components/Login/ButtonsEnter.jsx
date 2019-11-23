import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class ButtonsEnter extends Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        let isExist = false;
        for(let i = 0; i < this.props.users.length; i++) {
            if((this.props.login === this.props.users[i].user_login) && (this.props.pass === this.props.users[i].user_password)){
                isExist = true;
                this.props.onEnter(this.props.users[i]);
                console.log("this.props.users[i]", this.props.users[i]);
                console.log("Buttons User", this.props.testUser);
                break;
            }
        }

        if(!isExist) {
            event.preventDefault();
            alert("Wrong password or login");
        }
        console.log("Buttons User", this.props.testUser);
    }

    render() {
        return (
            <div className="form__buttons">
                <button className="form__buttons_create button" value="Create account" id="toCreate">Create account</button>
                <NavLink to="/home">
                    <button
                    className="form__buttons_enter button"
                    value="Enter"
                    id="Login"
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
	  testUser: state.currentUser
	}),
	dispatch => ({
		onEnter: (data) => {
			dispatch({
				type: "CHANGE_USER",
				payload: data
			})
		}
	})
  )(ButtonsEnter);