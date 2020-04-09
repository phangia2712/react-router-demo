import * as types from '../constants/actionTypes'
 
let defaultState = {
    isLogin: false,
    username: null
}

defaultState = localStorage.getItem('nguoidung') ? JSON.parse(localStorage.getItem('nguoidung')) : defaultState

function checkLogin (user, pass) {

    if (user === 'ta' && pass === '123') {
        return true
    } else {
        return false
    }
    
}
 
 
const loginInfo = (state = defaultState, action) => {
    let {type, userInfo} = action
    switch (type) {
        case types.LOG_OUT:
            state.isLogin = false
            state.username = null
            localStorage.setItem('nguoidung', JSON.stringify(state))
            return {...state}
            // ko phai retur ve [...state] vi [] la dung cho mang
            // trong khi do defaultState cua minh la {} 
            // nen phai return ve {...state}
        case types.LOG_IN:
            if (checkLogin(userInfo.username, userInfo.password)) {
                state.isLogin = true
                state.username = userInfo.username
            }
            localStorage.setItem('nguoidung', JSON.stringify(state))
            return {...state}
        default:
            return state
    }
}
 
export default loginInfo