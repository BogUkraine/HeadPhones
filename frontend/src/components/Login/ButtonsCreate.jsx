import React from 'react';
import { NavLink } from 'react-router-dom';

const ButtonsCreate = (({login, pass, userInfo}) => {

    let isCreate = false;

    for(let i = 0; i < userInfo.length; i++) {
        if(login === userInfo[i].user_name) {
            //alert("This login is busy, try another");
            //isCreate = false;
        }
        else {
            //isCreate = true;
        }
        //console.log(isCreate);
    }

	return (
        <div className="form__buttons">
            <button className="form__buttons_back" value="Back" id="toLogin">Back to login</button>
            <NavLink to="/home"><button className="form__buttons_enter" value="Create" id="Create">Create</button></NavLink>
        </div>
	);
})

export default ButtonsCreate;