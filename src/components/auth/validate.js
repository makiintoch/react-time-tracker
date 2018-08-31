import emailValidator from 'email-validator'

const validate = ({email, password}) => {
    const errors = {}

    if (!email)
        errors.email = "email is required"
    else if (!emailValidator.validate(email))
        errors.email = "email is not valid"

    if (!password)
        errors.password = "password is required"
    else if (password.length <= 6)
        errors.password = "password is to short, minimum 6 char"

    return errors
}

export default validate