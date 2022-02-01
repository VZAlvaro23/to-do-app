import React, { useState } from "react";

import "./todo.css";

const Todo = ({ text, todo, todos, setTodos }) => {
  const [isActive, setIsActive] = useState(false);

  // Setting todo status Completed/Uncompleted
  const checkCheckbox = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  // Deletes task
  const deleteHandler = () => {
    setIsActive(!isActive);
    setTimeout(() => {
      setTodos(todos.filter((el) => el.id !== todo.id));
    }, 1000);
  };

  return (
    <div className="task" style={{ opacity: isActive ? "0" : null }}>
      <div
        className={`checkbox ${
          todo.completed ? "checked-checkbox" : "unchecked-checkbox"
        }`}
        id="checkbox"
        onClick={checkCheckbox}
      >
        <i
          className={`fa fa-check ${
            todo.completed ? "checked-check" : "unchecked-check"
          }`}
        ></i>
      </div>
      <p className={`${todo.completed ? "checked-p" : "unchecked-p"}`}>
        {text.charAt(0).toUpperCase() + text.slice(1)}
      </p>
      <i className="fa fa-trash" onClick={deleteHandler}></i>
    </div>
  );
};

export default Todo;
