import { useState } from "react"

const TodoNew = ({addNewTodo}) => {

  const[valueInput, setValueInput] = useState('');

  const handleClick = () => {
    if(valueInput.trim() === '') return;
    addNewTodo(valueInput);
    setValueInput('');
  };

  return (
    <div className="todo-new">
      <input
        type="text"
        placeholder="Add new todo"
        value={valueInput}
        onChange={(e) => setValueInput(e.target.value)}
      />
      <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default TodoNew