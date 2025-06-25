const TodoData = ({ todoList, handleDelete }) => {
  return (
    <div className="todo-data">
      {todoList.map((item, index) => (
        <div key={item.id}>
          <div className="todo-item">
            {index + 1}. {item.name}
          </div>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TodoData