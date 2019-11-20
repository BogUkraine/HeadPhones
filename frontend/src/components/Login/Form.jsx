import React from 'react';

import LoginField from './LoginField';
import PasswordField from './PasswordField';
import ButtonsEnter from './ButtonsEnter';
import ButtonsCreate from './ButtonsCreate';

const Form = () => {
	return (
        <div className="login__right">
            <form className="form__enter form">
                <h2 className="form__title">Login to account</h2>
                <LoginField />
                <PasswordField />
                <ButtonsEnter />
            </form>
            <form className="form__create form">
                <h2 className="form__title">Create account</h2>
                <LoginField />
                <PasswordField />
                <ButtonsCreate />
            </form>
        </div>
	);
}

export default Form;