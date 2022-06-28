import { deleteToDo, completeToDo } from '../../store/todoSlice'
import { useDispatch } from "react-redux";

const ToDoItem = ({ id, content, done }) => {
  const margin10 = { margin: "10px" };
  const displayFlex = { display: "flex", justifyContent: "center", alignItems: "center" };
  const displayBlock = { display: "block" };

  const dispatch = useDispatch();
  return (
    <li style={{ ...margin10, ...displayFlex }}>
      <input type="checkbox"
        checked={done} onChange={() => { dispatch(completeToDo(id)) }}
      />
      <p style={
        { textDecoration: done ? 'line-through' : 'none' }
      }
      >
        {content}
      </p>
      <button style={{ ...margin10, ...displayBlock }} onClick={() => {
        dispatch(deleteToDo(id))
      }}
      >
        delete
      </button>
    </li >
  )
}
export default ToDoItem