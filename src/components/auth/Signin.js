import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {reduxForm, Field} from 'redux-form'
import ErrorField from './ErrorField'
import validate from './validate'

class SigninForm extends Component {
    handleSubmit = event => {
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <h1>Sign in</h1>

                <form className={'form'} onSubmit={this.handleSubmit} noValidate={true}>
                    <Field name={'email'} component={ErrorField} type={'email'} />
                    <Field name={'password'} component={ErrorField} type={'password'} />

                    <button type={'submit'}>Submit</button>

                    <p>Don't have an account? <Link to={'/signup'}>Sign Up</Link></p>
                </form>
            </div>
        )
    }
}

export default reduxForm({
    form: 'login',
    validate
})(SigninForm)