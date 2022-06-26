import { useState, useContext } from 'react';
import toDoContext from '../../store/toDoContext';
import { addToDo } from '../../store/toDoActionCreator';
const AddToDo = () => {
  //in-line style的部分
  const margin0Auto = { width: "300px", margin: "0 auto" };
  const textAlign = { textAlign: "center" };

  //使用Controlled component
  const [input, setInput] = useState("");
  const inputChange = (e) => {
    setInput(e.target.value);
  }

  //提取listDistpatch以便稍後用來發送事件
  const { listDispatch } = useContext(toDoContext);

  return (
    <div style={{ ...textAlign, ...margin0Auto }}>
      <input type="text" value={input} onChange={inputChange} />
      <button onClick={() => {
        listDispatch(
          addToDo(input)
        )
        setInput('');
      }}>add</button>
    </div>
  )
}

export default AddToDo