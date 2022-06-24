import React, { useContext } from 'react'
import ToDoItem from './ToDoItem';
import toDoContext from '../../store/toDoContext';
const ListToDo = () => {
  //in-line style的部分
  const margin0Auto = { width: "300px", margin: "0 auto" };
  const { listData } = useContext(toDoContext);
  //使用map來render<ToDoItem /> 並將listData這個array裡面的item屬性透過props傳遞給ToDoItem
  return (
    <ul style={margin0Auto} >
      {listData.map((data) => {
        return <ToDoItem key={data.id} content={data.content} id={data.id} done={data.done} />
      })}
    </ul >
  )
}

export default ListToDo