import React from 'react';
import { NavLink } from 'react-router-dom';

const ButtonsEnter = (({login, pass, userInfo}) => {

    let isLogin = false;

    for(let i = 0; i < userInfo.length; i++) {
        if((login === userInfo[i].user_name) && (pass === userInfo[i].user_password)){
            isLogin = true;
            break;
        }
        else {
            isLogin = false;
        }
        console.log(isLogin);
    }


	return (
        <div className="form__buttons">
            <button className="form__buttons_create" value="Create account" id="toCreate">Create account</button>
            <NavLink to="/home">
                <button
                className="form__buttons_enter"
                value="Enter"
                id="Login"
                >
                    Enter
                </button>
            </NavLink>
        </div>
	);
})



export default ButtonsEnter;