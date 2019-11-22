import React from 'react';

const PasswordField = (({funcChange}) => {
	return (
        <label className="form__password form__label">
            <span className="form__description">Password:</span>
            <input
            className="form__password_field field"
            type="password"
            onChange={(e) => funcChange(e)}
            />
        </label>
	);
})

export default PasswordField;