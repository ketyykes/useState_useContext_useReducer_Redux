import { useState } from 'react';
const AddToDo = ({ setListData }) => {
  //in-line style的部分
  const margin0Auto = { width: "300px", margin: "0 auto" };
  const textAlign = { textAlign: "center" };

  const [input, setInput] = useState("");

  const inputChange = (e) => {
    setInput(e.target.value);
  }

  const addHandler = () => {
    //避免輸入空白
    if (input.trim() === "") { return }
    //來自App component的setListData函式
    setListData(
      (prev) => ([...prev, {
        content: input,
        id: Date.now(),
        done: false
      }])
    )
    //按下新增後清空input
    setInput('');
  }

  return (
    <div style={{ ...textAlign, ...margin0Auto }}>
      <input type="text" value={input} onChange={inputChange} />
      <button onClick={addHandler}>add</button>
    </div>
  )
}

export default AddToDo