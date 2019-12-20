import React from 'react';

import FieldLoginEnter from './FieldLoginEnter';
import FieldLoginCreate from './FieldLoginCreate';
import FieldPasswordEnter from './FieldPasswordEnter';
import FieldPasswordCreate from './FieldPasswordCreate';
import ButtonsLoginEnter from './ButtonsLoginEnter';
import ButtonsCreateEnter from './ButtonsCreateEnter';

const Form = () => {
    return (
        <div className="login__right">
            <form className="form__enter form" id="formLogin">
                <h2 className="form__title">Login to account</h2>
                <FieldLoginEnter />
                <FieldPasswordEnter />
                <ButtonsLoginEnter />
            </form>
            <form className="form__create form" id="formCreate">
                <h2 className="form__title">Create account</h2>
                <FieldLoginCreate />
                <FieldPasswordCreate />
                <ButtonsCreateEnter />
            </form>
        </div>
    );
}

export default Form;