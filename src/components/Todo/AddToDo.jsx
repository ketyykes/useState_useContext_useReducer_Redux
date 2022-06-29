import { useState } from 'react';
import { useDispatch } from "react-redux";
import { addToDo } from '../../store/toDoSlice'
const AddToDo = () => {
  //in-line style的部分
  const margin0Auto = { width: "300px", margin: "0 auto" };
  const textAlign = { textAlign: "center" };


  //引入useDispach作為稍後派發事件使用
  const dispatch = useDispatch();

  

  //使用Controlled component
  const [input, setInput] = useState("");
  const inputChange = (e) => {
    setInput(e.target.value);
  }
  console.log(addToDo("test"));

  //透過從toDoSlice引入的addToDo函式，其函式為一個actionCreator
  //所以我們將input作為payload帶入即可。
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