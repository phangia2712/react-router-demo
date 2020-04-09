import { combineReducers } from "redux";
import loginInfo from './loginInfo' // loginInfo.js này chứa những phương thức xử lý cho biến loginInfo
 
const appReducers = combineReducers({
    loginInfo // đây là biến toàn cục tên loginInfo
})
 
export default appReducers