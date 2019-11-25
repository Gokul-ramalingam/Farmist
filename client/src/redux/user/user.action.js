import { UserActionTypes } from './user.types'


// This file consists of all the actions type and data

export const setCurrentUser = user =>({
    type : UserActionTypes.SET_CURRENT_USER,
    payload : user
})