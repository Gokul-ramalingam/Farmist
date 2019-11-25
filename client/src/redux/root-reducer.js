import { combineReducers } from 'redux'

// Root-reducer has detail of all the reducers 
// so that it can be easy for store to map

import userReducer from './user/user.reducer'

export default combineReducers({
    user : userReducer
})