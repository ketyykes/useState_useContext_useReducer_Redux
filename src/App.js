import React, { useState } from 'react'
import { AddToDo, ListToDo } from './components/Todo'
const App = () => {
  //將listData state宣告在上層
  const [listData, setListData] = useState([]);
  return (
    <div >
      <AddToDo setListData={setListData} />
      <ListToDo listData={listData} setListData={setListData} />
    </div>
  )
}
export default App