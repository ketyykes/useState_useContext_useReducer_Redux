import React, { useContext } from 'react'
import ToDoItem from './ToDoItem';
import toDoContext from '../../store/toDoContext';
const ListToDo = () => {
  //in-line style的部分
  const margin0Auto = { width: "300px", margin: "0 auto" };
  
  //使用useContext提取listData
  const { listData } = useContext(toDoContext);
  return (
    <ul style={margin0Auto} >
      {listData.map((data) => {
        return <ToDoItem key={data.id} content={data.content} id={data.id} done={data.done} />
      })}
    </ul >
  )
}

export default ListToDo