import React from 'react'
const ToDoItem = ({ id, content, setListData, done }) => {
  const margin10 = { margin: "10px" };
  const displayFlex = { display: "flex", justifyContent: "center", alignItems: "center" };
  const displayBlock = { display: "block" };
  const deleteHandler = () => {
    setListData((prev) => (prev.filter(item => item.id !== id)))
  }
  const completeHandler = (id) => {
    setListData(prev => {
      return prev.map(item => {
        if (item.id === id) {
          item.done = !item.done;
        }
        return item;
      })
    });
  }
  return (
    <li style={{ ...margin10, ...displayFlex }}>
      <input onChange={() => completeHandler(id)} type="checkbox" />
      <p style={{ textDecoration: (done ? "line-through" : "none") }}>
        {content}
      </p>
      <button onClick={deleteHandler} style={{ ...margin10, ...displayBlock }}>delete</button>
    </li>
  )
}
export default ToDoItem