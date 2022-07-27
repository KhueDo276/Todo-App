import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { BsPatchCheck } from "react-icons/bs";
import Edit from "./Edit";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <Edit edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <form
      className={todo.isComplete ? "todo-row-complete" : "todo-row"}
      key={index}
    >
      {todo.text}
      <div>
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className="icon"
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="icon"
        />
        <BsPatchCheck
          key={todo.id}
          onClick={() => completeTodo(todo.id)}
          className={todo.isComplete ? "check-complete" : "icon"}
        />
      </div>
    </form>
  ));
}

export default Todo;
