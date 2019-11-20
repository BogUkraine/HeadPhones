import React from 'react';

const LoginField = () => {
	return (
        <label className="form__login form__label">
            <span className="form__description">Login:</span>
            <input className="form__login_field" type="text" />
        </label>
	);
}

export default LoginField;