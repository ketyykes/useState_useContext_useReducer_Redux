import React, { useReducer } from 'react'
import { AddToDo, ListToDo } from './components/Todo';
import toDoContext from './store/toDoContext';
import toDoReducer from './store/toDoReducer';
const App = () => {
  const initialState = [
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
  ];
  //將listData state宣告在上層
  const [listData, listDispatch] = useReducer(toDoReducer, initialState);
  return (
    <div >
      <toDoContext.Provider value={{ listData, listDispatch }}>
        <AddToDo />
        <ListToDo />
      </toDoContext.Provider>
    </div>
  )
}
export default App