import { useState } from 'react';
import { useDispatch } from "react-redux";
import { addToDo } from '../../store/todoSlice'
const AddToDo = () => {
  //in-line style的部分
  const margin0Auto = { width: "300px", margin: "0 auto" };
  const textAlign = { textAlign: "center" };
  const dispatch = useDispatch();

  //使用Controlled component
  const [input, setInput] = useState("");
  const inputChange = (e) => {
    setInput(e.target.value);
  }
  return (
    <div style={{ ...textAlign, ...margin0Auto }}>
      <input type="text" value={input} onChange={inputChange} />
      <button onClick={() => {
        dispatch(addToDo(input));
        setInput('');
      }}>add</button>
    </div>
  )
}

export default AddToDo