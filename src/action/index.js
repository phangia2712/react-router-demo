import * as types from '../constants/actionTypes'

export const actLogOut = () => {
    return {
        type: types.LOG_OUT
    }
}

export const actLogIn = (userInfo) => {
    return {
        type: types.LOG_IN,
        userInfo
    }
}