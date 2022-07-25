import Todo from "./Todo";

const TodoItems = ({
  todos,
  toggleHandler,
  deleteHandler,
  editHandler,
}) => {
  return (
    <div>
      {" "}
      {todos.map((todo, index) => (
        <Todo
          key={index}
          todo={todo}
          toggleHandler={toggleHandler}
          index={index}
          deleteHandler={deleteHandler}
          editHandler={editHandler}
        />
      ))}
    </div>
  );
};

export default TodoItems;
