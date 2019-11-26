import React from 'react';

const PasswordField = (({funcChange}) => {
	return (
        <label
        className="form__password form__label"
        pattern="/^[A-Za-z0-9_-]{3,12}$/">
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