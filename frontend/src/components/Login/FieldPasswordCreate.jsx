import React from 'react';

const FieldPasswordCreate = () => {
	return (
        <label
        className="form__password form__label">
            <span className="form__description">Password:</span>
            <input
            className="form__password_field field"
            type="password"
            id="fieldPasswordCreate"
            pattern="^[A-Za-z0-9_-]{3,12}$"
            />
            <p className="form__warning" id="passwordWarnCreate">
                Login must contain from 3 to 12 latin letters, digits or '_', '-' symbols
            </p>
        </label>
	);
}

export default FieldPasswordCreate;