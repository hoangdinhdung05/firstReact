import { useState } from "react"

const TodoNew = (props) => {

    const[valueInput, setValueInput] = useState("hoangdung");

    console.log(props);
    const {addNewTodo} = props;

    const handleClick = () => {
      addNewTodo(valueInput);
      console.log("Check value input: ", valueInput);
      setValueInput("");
    }

    const handleOnChange = (name) => {
      setValueInput(name);
    }

    return (
        <div className="todo-new">
          <input type="text" 
            placeholder="Add new todo"
            onChange={ (event) => {handleOnChange(event.target.value)}}
            value={valueInput}
          />
          <button onClick={handleClick}>Add</button>
          <div>My text input value: {valueInput}</div>
        </div>
    )
}

export default TodoNew