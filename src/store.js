import { createStore } from "redux"
import appReducers from './reducers/index' // nơi chứa những reducer - có thể hiểu là những biến toàn cục
 
// window.__REDUX_DEVTOOLS_EXTENSION... giúp ta hiển thị được Redux devtool khi cài đặt addons trên trình duyệt
let store = createStore(appReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// console.log(store.getState())
export default store