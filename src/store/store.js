import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';
import toDoReducer from './todoSlice';

// const reducer = combineReducers({ toDoReducer })
export const store = configureStore({
    reducer: {
        toDoReducer
    }
})