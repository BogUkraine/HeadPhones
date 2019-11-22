import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class ButtonsEnter extends Component {

    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {

        for(let i = 0; i < this.props.userInfo.length; i++) {
            if((this.props.login === this.props.userInfo[i].user_login) && (this.props.pass === this.props.userInfo[i].user_password)){
                break;
            }
            else {
                event.preventDefault();
                alert("Wrong password or login");
            }
        }
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


export default ButtonsEnter;