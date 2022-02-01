import React, { useState } from "react";
import "./form.css";

const Form = ({
  inputText,
  setInputText,
  todos,
  setTodos,
  status,
  setStatus,
  id,
  setId,
  categories,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  // Generates an exclusie ID
  const nextId = () => {
    if (localStorage.getItem("id") === null) {
      id += 1;
      setId(id);
      localStorage.setItem("id", id);
    } else {
      id = parseInt(localStorage.getItem("id")) + 1;
      setId(id);
      localStorage.setItem("id", id);
    }
    return id;
  };

  // Submits the todo object
  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (inputText === "") {
      window.alert("You must introduce something!");
    } else {
      setTodos([
        ...todos,
        {
          text: inputText,
          completed: false,
          id: nextId(),
          category: categories,
        },
      ]);
      setInputText("");
    }
  };

  // Sets Completed/Uncompleted
  const statusHandler = (e) => {
    setStatus(e.target.textContent);
    e.target.textContent = status;
  };

  // Adding style to input when focused
  const focusedInput = () => {
    setIsFocused(!isFocused);
  };

  // Toggling options visibility
  const addingVisibility = () => {
    setIsActive(!isActive);
  };

  return (
    <form
      id="submit-container"
      className={
        isFocused ? "submit-container focused" : "submit-container unfocused"
      }
    >
      <button
        onClick={submitTodoHandler}
        className="submit-button"
        type="submit"
      >
        +
      </button>
      <input
        onFocus={focusedInput}
        onBlur={focusedInput}
        id="todo-input"
        className="todo-input"
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        placeholder="New task..."
      />
      <div
        className="select-container"
        id="select-container"
        onClick={addingVisibility}
      >
        <button type="button" className="todo-select" id="todo-select">
          <span value="all">{status}</span>
          <i className="fa fa-angle-down submit-angle-down"></i>
        </button>
        <ul
          className={
            !isActive
              ? "todo-options visibility-hidden"
              : "todo-options visibility-visible"
          }
        >
          <li onClick={statusHandler}>Completed</li>
          <li onClick={statusHandler}>Uncompleted</li>
        </ul>
      </div>
    </form>
  );
};

export default Form;
