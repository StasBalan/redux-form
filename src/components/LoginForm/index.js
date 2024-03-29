import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { myInput } from '../Field/index';
import { requiredInput, correctInput, matchInput } from '../../Validation'

class LoginForm extends Component{
    render() {
        const { handleSubmit} = this.props;
        return (
            <form onSubmit={ handleSubmit }>
                <Field
                    name = 'username'
                    component = {myInput}
                    type = 'text'
                    placeholder = 'Username'
                    validate = {[requiredInput, correctInput]}
                />
                <Field
                    name = 'password'
                    component = {myInput}
                    type = 'password'
                    placeholder = 'Password'
                    validate = {requiredInput}/>
                <Field
                    name = 'confirm-password'
                    component = {myInput}
                    type = 'password'
                    placeholder = 'Confirm password'
                    validate = {[requiredInput, matchInput]}/>
                <button type = 'submit' label = 'submit'>Submit</button>
            </form>
        )
    }
}

LoginForm = reduxForm ({
    form: 'login',
})(LoginForm);

export default LoginForm;