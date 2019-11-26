import React from 'react';

const LoginField = (({funcChange}) => {
	return (
        <label
        className="form__login form__label"
        pattern="/^[A-Za-z0-9_-]{3,12}$/">
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