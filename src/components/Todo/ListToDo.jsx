import React from 'react'
import ToDoItem from './ToDoItem';
import { useSelector, useDispatch } from "react-redux";
const ListToDo = () => {
  //in-line style的部分
  const margin0Auto = { width: "300px", margin: "0 auto" };
  const {listData} = useSelector((state) => state.toDoReducer);
  return (
    <ul style={margin0Auto} >
      {listData.map((data) => {
        return <ToDoItem key={data.id} content={data.content} id={data.id} done={data.done} />
      })}
    </ul >
  )
}

export default ListToDo