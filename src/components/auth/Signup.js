import React from 'react'
import {reduxForm, Field} from 'redux-form'

const SignupForm = props => {
    return (
        <form>
            <form className={'form'}>
                <div>
                    <label htmlFor="email">email</label>
                    <Field className={'form__field'} name={'email'} component={'input'} type={'email'} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <Field className={'form__field'} name={'password'} component={'input'} type={'password'} />
                </div>

                <button type={'submit'}>Submit</button>
            </form>
        </form>
    )
}

export default reduxForm({
    form: 'signup'
})(SignupForm)