import React from 'react'
import {Link} from 'react-router-dom'
import {reduxForm, Field} from 'redux-form'
import ErrorField from '../common/ErrorField'
import validate from '../common/validate'

const SignupForm = ({signUpError, handleSubmit}) => {
    return (
        <div className={'form__block'}>
            <h1>Sign up</h1>

            {signUpError && <p className={'error'}>{signUpError.message}</p> }

            <form className={'form'} onSubmit={handleSubmit} noValidate={true}>
                <Field name={'email'} component={ErrorField} type={'email'} />
                <Field name={'password'} component={ErrorField} type={'password'} />

                <button type={'submit'}>Submit</button>

                <p><Link to={'/login'}>Sign In</Link> if you have an account.</p>
            </form>
        </div>
    )
}

export default reduxForm({
    form: 'signup',
    validate
})(SignupForm)