const TodoData = (props) => {
    //props là 1 object
    console.log("Check props from TodoData: ", props);

    const {todoList} = props;
    console.log("Check todoList from TodoData: ", todoList);
    return (
        <div className="todo-data">

          {todoList.map((item, index) => {
            return (
              console.log("Check item from TodoData: ", item),
              <div>

                  <div className="todo-item">{index+1} {item.name}</div>
                  <button>Delete</button>
                  
              </div>
            )}
          )}
        </div>
    )
}

export default TodoData