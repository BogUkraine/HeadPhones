import React from 'react';

const FieldLoginEnter = () => {
    return (
        <label className="form__login form__label">
            <span className="form__description">Login:</span>
            <input
            className="form__login_field field"
            type="text"
            id="fieldLoginEnter"
            pattern="^[A-Za-z0-9_-]{3,12}$"     
            />
            <p className="form__warning" id="loginWarnEnter">
                Login must contain from 3 to 12 latin letters, digits or '_', '-' symbols
            </p>
        </label>
    );
}

export default FieldLoginEnter;