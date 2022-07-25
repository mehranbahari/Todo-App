import { useEffect, useState } from "react";

const AddTodo = ({
  AddTodoHandler,
  todos,
  changehandel,
  editMode,
  editedTodo,
}) => {
  const [text, setText] = useState("");
  const [error, setError] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");

  const submitEditedTodo = (e) => {
    e.preventDefault();
    changehandel(editedTitle);
  };

  useEffect(() => {
    if (editedTodo) {
      setEditedTitle(editedTodo.text);
    }
  }, [editedTodo]);

  const submitTodo = (e) => {
    e.preventDefault();

    const isDublicate = todos.find((todo) => todo.text.trim() === text.trim());

    if (text.trim() == "") {
      setError("please add new task not exist task");
      setTimeout(() => {
        setError(null);
      }, 5000);
    } else if (!isDublicate) {
      AddTodoHandler(text);
      setText("");
    } else if (isDublicate) {
      setError("DIBLACATE");
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
  };

  return (
    <div>
      {" "}
      {error && (
        <p style={{ color: "red", padding: "0", textAlign: "center" }}>
          {error}
        </p>
      )}
      {editMode ? (
        <div>
          <form onSubmit={(e) => submitEditedTodo(e)}>
            <h2 style={{ color: "red" }}>ویرایش</h2>
            <input
              placeholder="Enter Text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
          </form>
        </div>
      ) : (
        <div>
          <h1 style={{ padding: "50px 0px 0px 0px" }}>TODO LIST</h1>
          <form onSubmit={(e) => submitTodo(e)}>
            <input
              placeholder="Enter Text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default AddTodo;
