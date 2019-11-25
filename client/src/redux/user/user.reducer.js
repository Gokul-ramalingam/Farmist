import { UserActionTypes } from './user.types'

const INITIAL_STATE = {
    currentUser : null
}


//If the action matches the any of the actions specified in the cases then particular change is taken place 
// else state is returned by default

const userReducer = (state = INITIAL_STATE,action) => {
    switch(action.type){
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,currentUser:action.payload
            }
        default:
            return state
    }
}

export default userReducer;