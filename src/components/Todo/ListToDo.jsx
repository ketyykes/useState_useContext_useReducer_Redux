import React from 'react'
import ToDoItem from './ToDoItem';
import { useSelector } from "react-redux";
const ListToDo = () => {
  //in-line style的部分
  const margin0Auto = { width: "300px", margin: "0 auto" };
  console.log(useSelector(state => state));
  //透過useSelector將store的state
  const { listData } = useSelector((state) => state.toDoReducer);
  return (
    <ul style={margin0Auto} >
      {listData.map((data) => {
        return <ToDoItem key={data.id} content={data.content} id={data.id} done={data.done} />
      })}
    </ul >
  )
}

export default ListToDo