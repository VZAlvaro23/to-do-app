import React from "react";
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
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

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

  const statusHandler = (e) => {
    setStatus(e.target.textContent);
    e.target.textContent = status;
  };

  const submitContainer = document.getElementById("submit-container");

  const focusedInput = () => {
    submitContainer.classList.add("focused");
  };

  const unfocusedInput = () => {
    submitContainer.classList.remove("focused");
  };
  const options = document.getElementById("todo-options");
  const addingVisibility = () => {
    options.classList.toggle("visibility-hidden");
    options.classList.toggle("visibility-visible");
  };

  return (
    <form id="submit-container" className="submit-container">
      <button
        onClick={submitTodoHandler}
        className="submit-button"
        type="submit"
      >
        +
      </button>
      <input
        onFocus={focusedInput}
        onBlur={unfocusedInput}
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
        <ul className="todo-options visibility-hidden" id="todo-options">
          <li onClick={statusHandler}>Completed</li>
          <li onClick={statusHandler}>Uncompleted</li>
        </ul>
      </div>
    </form>
  );
};

export default Form;
