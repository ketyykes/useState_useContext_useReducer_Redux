import React, { useContext } from 'react'
import toDoContext from '../../store/toDoContext';
import { deleteToDo, completeToDo } from '../../store/toDoActionCreator';
const ToDoItem = ({ id, content, done }) => {
  const margin10 = { margin: "10px" };
  const displayFlex = { display: "flex", justifyContent: "center", alignItems: "center" };
  const displayBlock = { display: "block" };
  const { listDispatch } = useContext(toDoContext);

  return (
    <li style={{ ...margin10, ...displayFlex }}>
      <input type="checkbox"
        checked={done}
        onChange={
          () => listDispatch(completeToDo(id))
        } />
      <p style={
        { textDecoration: done ? 'line-through' : 'none' }
      }
      >
        {content}
      </p>
      <button style={{ ...margin10, ...displayBlock }}
        onClick={
          () => listDispatch(deleteToDo(id))
        } >
        delete
      </button>
    </li >
  )
}
export default ToDoItem