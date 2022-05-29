import { USER_INFO_SUCCESS, USER_LOGOUT_SUCCESS } from '../constants/userConstants'

export const saveUserInfo = (data) => async (dispatch) => {
    const { email, firstName, lastName, _id } = data
    const temp = {
        id: _id,
        email,
        firstName,
        lastName
    }
    localStorage.setItem('user', JSON.stringify(temp))
    dispatch({
        type: USER_INFO_SUCCESS,
        payload: temp
    })
}
export const logoutUser = () => async (dispatch) => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    dispatch({
        type: USER_LOGOUT_SUCCESS,
    })
}
