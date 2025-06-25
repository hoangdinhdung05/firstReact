const TodoData = (props) => {
    //props là 1 object
    console.log("Check props from TodoData: ", props);
    return (
        <div className="todo-data">
          <div>My name is: {props.name}</div>
          <div>Learning React</div>
          <div>Learning React</div>
          <div>Learning React</div>
          <div>{JSON.stringify(props.todoList)}</div>
        </div>
    )
}

export default TodoData