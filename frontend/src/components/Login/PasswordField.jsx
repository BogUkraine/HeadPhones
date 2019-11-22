import React from 'react';

const PasswordField = () => {
	return (
        <label className="form__password form__label">
            <span className="form__description">Password:</span>
            <input
            className="form__password_field button"
            type="password"
            />
        </label>
	);
}

export default PasswordField;