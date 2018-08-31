import {combineReducers} from 'redux'
import {routerReducer as router} from 'react-router-redux'
import {reducer as form} from 'redux-form'
import {ADD_TASK} from "../constants"

const initialState = {
    tasks: []
}

const reducerTasks = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {...state, tasks: [...state.tasks, action.payload]}
        default:
            return state
    }
}

export default combineReducers({
    router,
    form,
    reducerTasks
})