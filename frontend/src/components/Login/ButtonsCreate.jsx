import React from 'react';
import { NavLink } from 'react-router-dom';

const ButtonsCreate = () => {
	return (
        <div className="form__buttons">
            <button className="form__buttons_back" value="Back">Back to login</button>
            <NavLink to="/home"><button className="form__buttons_enter" value="Create">Create</button></NavLink>
        </div>
	);
}

export default ButtonsCreate;