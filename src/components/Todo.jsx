const Todo = ({ todo, toggleHandler, deleteHandler, editHandler }) => {
  const backgroundColor = todo.isCompleted ? "green" : "#333";
  return (
    <li style={{ backgroundColor }}>
      {todo.text}
      <button onClick={() => toggleHandler(todo.id)}>
        {todo.isCompleted ? "Done" : "No Finish"}
      </button>
      <button onClick={() => deleteHandler(todo.id)}>DELETE</button>
      <button onClick={() => editHandler(todo.id)}>EDIT</button>
    </li>
  );
};

export default Todo;
