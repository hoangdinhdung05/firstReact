import './todo.css'
import './TodoNew'
import { useState  } from 'react'
import TodoNew from './TodoNew'
import TodoData from './TodoData'

const randomIntInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const TodoApp = () => {
  const [todoList, setTodoList] = useState([]);

  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntInterval(1, 1000),
      name
    };
    setTodoList([...todoList, newTodo]);
  }

  const handleDeleteTodo = (id) => {
    const updateList = todoList.filter((item) => item.id !== id);
    setTodoList(updateList);
  };

  return (
    <div className="todo-container">
      <div className="todo-title">To do list</div>
      <TodoNew addNewTodo={addNewTodo} />
      
      {todoList.length > 0 ? (
        <TodoData todoList={todoList} handleDelete={handleDeleteTodo} />
      ) : (
        <div className="todo-empty">No data</div>
      )}
    </div>
  );
}
export default TodoApp