import React from 'react'
import {Link} from 'react-router-dom'
import {reduxForm, Field} from 'redux-form'
import ErrorField from '../common/ErrorField'
import validate from '../common/validate'

const SigninForm = ({signInUser, signInError, handleSubmit}) => {
    return (
        <div className={'form__block'}>
            <h1>Sign in</h1>

            {signInError && <p className={'error'}>{signInError.message}</p> }

            <form className={'form'} onSubmit={handleSubmit} noValidate={true}>
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