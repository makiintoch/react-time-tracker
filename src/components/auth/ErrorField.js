import React from 'react'
import './ErrorField.css'

const ErrorField = props => {
    const {input, type, meta: {error, touched}} = props
    const errorTag = touched && error && <span className={'form__error'}>{error}</span>
    return (
        <div className={'form_row'}>
            <label className={'form__label'} htmlFor={input.name}>{input.name}</label>
            <input className={'form__field'} {...input} type={type} />
            {errorTag}
        </div>
    )
}

export default ErrorField

