import { useState } from "react"

const TodoNew = (props) => {

    //useState hook
    // const valueInput = "";
    const[valueInput, setValueInput] = useState("hoangdung");

    console.log(props);
    // const {addNewTodo} = props;
    // addNewTodo("Hoàng Dũng");

    const handleClick = () => {
      console.log("Check value input: ", valueInput);
    }

    const handleOnChange = (name) => {
      setValueInput(name);
    }

    return (
        <div className="todo-new">
          <input type="text" 
            placeholder="Add new todo"
            onChange={ (event) => {handleOnChange(event.target.value)}}
          />
          <button onClick={handleClick}>Add</button>
          <div>My text input value: {valueInput}</div>
        </div>
    )
}

export default TodoNew