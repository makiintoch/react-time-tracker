import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import SigninForm from './Signin'
import SignupForm from './Signup'
import Loader from '../common/Loader'
import {connect} from 'react-redux'
import {signUp, signIn, moduleName} from "../../ducks/auth"

class Auth extends Component {
    handleSignin = ({email, password}) => {
        this.props.signIn(email, password)
    }

    handleSignup = ({email, password}) => {
        this.props.signUp(email, password)
    }

    render() {
        const {loading, user, error} = this.props
        return (
            <div className={'auth'}>
                {loading && <Loader />}

                <Route path={'/login'} render={() => <SigninForm signInUser={user} signInError={error} onSubmit={this.handleSignin} />} />
                <Route path={'/signup'} render={() => <SignupForm signUpError={error} onSubmit={this.handleSignup} />} />
            </div>
        )
    }
}

export default connect(state => ({
    loading: state[moduleName].loading,
    user: state[moduleName].user,
    error: state[moduleName].error
}), {signUp, signIn})(Auth)