import { AddToDo, ListToDo } from './components/Todo';
const App = () => {
  //這邊給定了初始狀態將其發布


  // 透過Provider將listData和dispatch發佈
  // const [listData, listDispatch] = useReducer(toDoReducer, initialState);
  return (
    <div >
      <AddToDo />
      <ListToDo />
    </div>
  )
}
export default App