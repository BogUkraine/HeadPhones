import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

class ButtonsCreate extends Component {

    constructor(props){
        super(props);
        this.state = {
            arrayUsers: []
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        console.log("this.props.users.password", this.props.users);

        let isLogin = false;

        for(let i = 0; i < this.props.users.length; i++) {
            if(this.props.login === this.props.users[i].user_login){
                isLogin = true;
                event.preventDefault();
                alert("Wrong password or login");
                break;
            }
        }

        if(!isLogin) {
            axios.post("http://localhost:3210/users", {
                    user_id: this.props.users.length+1,
                    user_name: this.props.name,
                    user_password: this.props.pass,
                    user_login: this.props.login
                })
                .then( (response) => {
                    console.log(response);
                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error.response);
                });
        }
        else{
            
        }
    }

    render() {
        return (
            <div className="form__buttons">
                <button className="form__buttons_back button" value="Back" id="toLogin">Back to login</button>
                <NavLink to="/login">
                    <button
                        className="form__buttons_enter button"
                        value="Create"
                        id="Create"
                        onClick={this.handleClick}
                        >
                            Create
                        </button>
                </NavLink>
            </div>
        );
    }
}

export default ButtonsCreate;