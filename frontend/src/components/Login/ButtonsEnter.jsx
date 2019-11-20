import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';

const ButtonsEnter = () => {
	return (
        <div className="form__buttons">
            <button className="form__buttons_create" value="Create account">Create account</button>
            <NavLink to="/home"><button className="form__buttons_enter" value="Enter">Enter</button></NavLink>
        </div>
	);
}

export default ButtonsEnter;