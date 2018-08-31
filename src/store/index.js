import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from '../reducers'
import {routerMiddleware} from 'react-router-redux'
import history from '../history'

const enhancer = applyMiddleware(routerMiddleware(history), logger, thunk)

const store = createStore(reducers, enhancer)
window.store = store

export default store