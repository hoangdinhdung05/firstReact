import './components/todo/todo.css'
import './components/todo/TodoNew'
import { useState } from 'react'
import TodoNew from './components/todo/TodoNew'
import TodoData from './components/todo/TodoData'

const App = () => {

  const [todoList, setTodoList] = useState([
  ]);
  const addNewTodo = (name) => {
    const newTodo = {id: randomIntInterval(1, 100), name: name, age: 20}
    setTodoList([...todoList, newTodo]);
  }

  const randomIntInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

  // addNewTodo();
  return (
    <>
      <div className="todo-container">
        <div className="todo-title">To do list</div>
        <TodoNew 
          addNewTodo={addNewTodo}
        />
        <TodoData 
          todoList={todoList}
        />        
      </div>
    </>
  )
}

export default App
