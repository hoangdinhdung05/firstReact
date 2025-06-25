import './components/todo/todo.css'
import './components/todo/TodoNew'
import TodoNew from './components/todo/TodoNew'
import TodoData from './components/todo/TodoData'

const App = () => {

  const hoangdung = {
    name: 'Hoang Dung',
    age: 20
  }

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
          name={hoangdung.name}
          age={hoangdung.age}
        />        
      </div>
    </>
  )
}

export default App
