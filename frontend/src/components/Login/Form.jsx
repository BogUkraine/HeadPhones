import React, {Component} from 'react';
import axios from 'axios';

import LoginField from './LoginField';
import PasswordField from './PasswordField';
import ButtonsEnter from './ButtonsEnter';
import ButtonsCreate from './ButtonsCreate';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    user_id: "",
                    user_name: "",
                    user_password: "",
                    user_login: ""
                }
            ],
            inputLogin: "",
            inputPass: "",
            inputName: ""
        }

        this.onChangeLogin = this.onChangeLogin.bind(this);
        this.onChangePass = this.onChangePass.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
    }

    componentDidMount() {
        axios.get("http://localhost:3210/users")
            .then( (response) => {
                this.setState({
                    users: response.data,
                });
                //console.log(this.state.users);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    onChangeLogin (event) {
        this.setState({inputLogin: event.target.value});
        console.log(this.state.inputLogin);
    }

    onChangePass (event) {
        this.setState({inputPass: event.target.value});
        console.log(this.state.inputPass);
    }

    onChangeName (event) {
        this.setState({inputName: event.target.value});
        console.log(this.state.inputName);
    }


    render () {
        return (
        <div className="login__right">
            <form className="form__enter form" id="formLogin">
                <h2 className="form__title">Login to account</h2>
                    <label className="form__login form__label">
                    <span className="form__description">Login:</span>
                    <input
                    className="form__login_field field"
                    type="text"
                    id="loginEnter"
                    onChange={this.onChangeLogin}
                    />
                    </label>
                        <label className="form__password form__label">
                        <span className="form__description">Password:</span>
                        <input
                        className="form__password_field field"
                        type="password"
                        onChange={this.onChangePass}
                        />
                        </label>
                <ButtonsEnter
                    login={this.state.inputLogin}
                    pass={this.state.inputPass}
                    userInfo={this.state.users}
                />
            </form>
            <form className="form__create form" id="formCreate">
                <h2 className="form__title">Create account</h2>
                <label className="form__login form__label">
                    <span className="form__description">Login:</span>
                    <input
                    className="form__login_field field"
                    type="text"
                    id="loginEnter"
                    onChange={this.onChangeLogin}
                    />
                    </label>
                        <label className="form__password form__label">
                        <span className="form__description">Password:</span>
                        <input
                        className="form__password_field field"
                        type="password"
                        onChange={this.onChangePass}
                        />
                        </label>
                            <label className="form__name form__label">
                            <span className="form__description">UserName:</span>
                            <input
                            className="form__name_field field"
                            type="text"
                            onChange={this.onChangeName}
                            />
                            </label>
                <ButtonsCreate
                    login={this.state.inputLogin}
                    pass={this.state.inputPass}
                    name={this.state.inputName}
                    users={this.state.users}
                />
            </form>
        </div>
        );
    }
}

export default Form;