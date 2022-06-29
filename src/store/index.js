import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';
import toDoReducer from './toDoSlice';


// 方法一 如果有多個slice的話可以透過combineReducers將其結合
// const reducer = combineReducers({ toDoReducer })
// const store = configureStore({
//     reducer
// })

// 方法二 直接在物件裡面宣告一個key為reducer值為你所創建的reducer
//透過configureStore的方式設定store將
const store = configureStore({
    reducer: {
        toDoReducer
    }
})
export default store;