import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';
import toDoReducer from './todoSlice';

// const reducer = combineReducers({ toDoReducer })
const store = configureStore({
    reducer: {
        toDoReducer
    }
})
export default store;