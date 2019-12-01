import React from 'react';

const FieldPasswordEnter = () => {
	return (
        <label
        className="form__password form__label">
            <span className="form__description">Password:</span>
            <input
            className="form__password_field field"
            type="password"
            id="fieldPasswordEnter"
            pattern="^[A-Za-z0-9_-]{3,12}$"
            />
            <p className="form__warning" id="passwordWarnEnter">
                Login must contain from 3 to 12 latin letters, digits or '_', '-' symbols
            </p>
        </label>
	);
}

export default FieldPasswordEnter;