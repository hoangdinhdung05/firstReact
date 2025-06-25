import './components/todo/todo.css'
import './components/todo/TodoNew'
import { useState } from 'react'
import TodoNew from './components/todo/TodoNew'
import TodoData from './components/todo/TodoData'

const App = () => {

  const [todoList, setTodoList] = useState([
    {id: 1, name: 'Hoang Dung', age: 20},
    {id: 2, name: 'Hoang Dang', age: 30}
  ]);

  // const hoangdung = {
  //   name: 'Hoang Dung',
  //   age: 20
  // }

  const addNewTodo = (name) => {
    alert(`Add new todo ${name}`);
  }

  // addNewTodo();
  return (
    <>
      <div className="todo-container">
        <div className="todo-title">To do list</div>
        <TodoNew 
          addNewTodo={addNewTodo}
        />
        <TodoData 
          // id={todoList.id}
          // name={todoList.name}
          // age={todoList.age}
          todoList={todoList}
        />        
      </div>
    </>
  )
}

export default App
