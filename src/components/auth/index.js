import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import SigninForm from './Signin'
import SignupForm from './Signup'
import Loader from '../common/Loader'
import {connect} from 'react-redux'
import {signUp, moduleName} from "../../ducks/auth"

class Auth extends Component {
    handleSignin = ({email, password}) => {
        console.log('sign in from components')
    }

    handleSignup = ({email, password}) => {
        this.props.signUp(email, password)
    }

    render() {
        const {loading} = this.props
        return (
            <div className={'auth'}>
                {loading && <Loader />}

                <Route path={'/login'} render={() => <SigninForm onSubmit={this.handleSignin} />} />
                <Route path={'/signup'} render={() => <SignupForm onSubmit={this.handleSignup} />} />
            </div>
        )
    }
}

export default connect(state => ({
    loading: state[moduleName].loading
}), {signUp})(Auth)