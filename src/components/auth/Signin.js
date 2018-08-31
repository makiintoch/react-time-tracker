import React from 'react'
import {Link} from 'react-router-dom'
import {reduxForm, Field} from 'redux-form'

let SigninForm = props => {
    return (
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
            
            <p>Don't have an account? <Link to={'/signup'}>Sign Up</Link></p>
        </form>
    )
}

export default reduxForm({
    form: 'login'
})(SigninForm)