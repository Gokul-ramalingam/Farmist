import { createStore,applyMiddleware } from 'redux'
import logger from 'redux-logger'


// The store includes rootReducer and logger middleware 
// from redux-logger which provides state changes details in console

import rootReducer from './root-reducer'

const middleware = [logger]

const store = createStore(rootReducer,applyMiddleware(...middleware))

export default store;