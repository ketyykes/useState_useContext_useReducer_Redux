import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    listData: [
        {
            content: "測試",
            id: 409823109843,
            done: false
        },
        {
            content: "測試二",
            id: 543098209,
            done: false
        }
    ]
}

export const toDoSlice = createSlice({
    name: 'toDo',
    initialState,
    reducers: {
        addToDo: (state, action) => {
            const toDo = {
                content: action.payload,
                id: Date.now(),
                done: false
            }
            state.listData.push(toDo);
        },
        deleteToDo: (state, action) => {
            state.listData = state.listData.filter(
                toDoItem => toDoItem.id !== action.payload
            );
        },
        completeToDo: (state, action) => {
            const index = state.listData.findIndex((todo) => (todo.id === action.payload));
            state.listData[index].done = !state.listData[index].done
        }
    },
})
console.log(toDoSlice);
export const { addToDo, deleteToDo, completeToDo } = toDoSlice.actions;

export default toDoSlice.reducer