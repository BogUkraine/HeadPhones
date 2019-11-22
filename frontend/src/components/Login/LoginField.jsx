import React from 'react';

const LoginField = (({funcChange}) => {
	return (
        <label className="form__login form__label">
            <span className="form__description">Login:</span>
            <input
            className="form__login_field field"
            type="text"
            id="loginEnter"
            onChange={(e) => funcChange(e)}
            />
        </label>
    );
})

export default LoginField;