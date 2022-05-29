import {
    USER_INFO_SUCCESS, USER_LOGOUT_SUCCESS,
} from '../constants/userConstants'

export const userInfoReducer = (state = null, action) => {
    switch (action.type) {
        case USER_INFO_SUCCESS:
            return action.payload
        case USER_LOGOUT_SUCCESS:
            return null
        default:
            return state
    }
}