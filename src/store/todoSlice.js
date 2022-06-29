import { createSlice } from '@reduxjs/toolkit';
//宣告一個物件叫做initialState裡面，裡面包含state，這裡的state是一個陣列叫做listDate
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
//透過從redux引入的createSlice參數帶入物件其中key包含name和initialState和reducers
export const toDoSlice = createSlice({
    name: 'toDo',
    initialState,
    reducers: {
        //reducers為函式，redux toolkit的方式可以讓我們撰寫mutable的方式直接更改state
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
//可以創建好的toDoSlice印出
console.log(toDoSlice);
//將actions導出以便其他檔案使用
export const { addToDo, deleteToDo, completeToDo } = toDoSlice.actions;
//將reducer作為預設導出，預計將給store使用
export default toDoSlice.reducer