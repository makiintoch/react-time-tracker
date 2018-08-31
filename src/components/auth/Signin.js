import React from 'react'
import {Link} from 'react-router-dom'
import {reduxForm, Field} from 'redux-form'
import ErrorField from './ErrorField'
import validate from './validate'

const SigninForm = props => {
    return (
        <div className={'form__block'}>
            <h1>Sign in</h1>

            <form className={'form'} onSubmit={props.handleSubmit} noValidate={true}>
                <Field name={'email'} component={ErrorField} type={'email'} />
                <Field name={'password'} component={ErrorField} type={'password'} />

                <button type={'submit'}>Submit</button>

                <p>Don't have an account? <Link to={'/signup'}>Sign Up</Link></p>
            </form>
        </div>
    )
}

export default reduxForm({
    form: 'login',
    validate
})(SigninForm)