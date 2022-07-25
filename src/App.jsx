import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editedTodo, setEditedTodo] = useState(null);

  const AddTodoHandler = (text) => {
    const newTodos = [...todos];
    let id = Math.floor(Math.random() * 100);
    id = Math.pow(id, 5);
    newTodos.push({ text, isCompleted: false, id });
    setTodos(newTodos);
  };

  //////toggle done finish
  const toggleHandler = (id) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.id === id);
    newTodos[todoIndex].isCompleted = !newTodos[todoIndex].isCompleted;
    setTodos(newTodos);
  };

  ////delete
  const deleteHandler = (id) => {
    const newCopy = [...todos];
    const newTodos = newCopy.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  /////edit

  const editHandler = (id) => {
    ///1
    setEditMode(!editMode);
    ///////2
    const editTodo = todos.find((todo) => todo.id === id);
    setEditedTodo(editTodo);
    console.log(editTodo);
  };

  const changehandel = (text) => {
    const newCopy = [...todos];
    const editIndex = newCopy.findIndex((todo) => todo.id === editedTodo.id);
    newCopy[editIndex].text = text;
    setTodos(newCopy);
  };

  return (
    <div>
      <ul>
        {editMode && <h2>شما در حال ویرایش هستی</h2>}
        <AddTodo
          AddTodoHandler={AddTodoHandler}
          todos={todos}
          editedTodo={editedTodo}
          changehandel={changehandel}
          editMode={editMode}
        />
        <TodoItems
          todos={todos}
          toggleHandler={toggleHandler}
          deleteHandler={deleteHandler}
          editHandler={editHandler}
        />
        {todos.length > 0 && (
          <button className="clearAll" onClick={() => setTodos([])}>
            CLEAR ALL
          </button>
        )}
      </ul>
    </div>
  );
};

export default App;
