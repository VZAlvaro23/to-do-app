// Import components useState, useEffect and own components
import React, { useState, useEffect } from "react";
import "./App.css";
import { Form, TodoList, Category } from "./components";

// Import icons from fontawasome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faTrash,
  faCheck,
  faPlus,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

// Import images
import smallestVector from "./assets/vector-muy-pequeno.png";
import smallVector from "./assets/vector-pequeno.png";
import mediumVector from "./assets/vector-mediano.png";
import bigVector from "./assets/vector-grande.png";
import closestVector from "./assets/closest-vector.png";
import furtherVector from "./assets/further-vector.png";
import furthestVector from "./assets/furthest-vector.png";

library.add(fab, faTrash, faCheck, faPlus, faAngleDown, faPlus);

function App() {
  const [categories, setCategories] = useState("category");
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [options, setOptions] = useState([]);

  const [inputText, setInputText] = useState("");
  const [id, setId] = useState(0);
  const [todos, setTodos] = useState([]);

  const [status, setStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    categoryHandler();
    saveLocalTodos();
  }, [todos, status, categories]);

  useEffect(() => {
    categoryHandler();
  }, [filteredTodos]);

  // Completed/Uncompleted filter
  const filterHandler = () => {
    switch (status) {
      case "Completed":
        setFilteredTodos(todos.filter((todo) => todo.completed));
        setStatus("Completed");
        break;
      case "Uncompleted":
        setFilteredTodos(todos.filter((todo) => !todo.completed));
        setStatus("Uncompleted");
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  // Category filter
  const categoryHandler = () => {
    setFilteredCategories(
      filteredTodos.filter((todo) => todo.category === categories)
    );
  };

  // Getting tados and categories from lacoalStorage
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null)
      localStorage.setItem("todos", JSON.stringify([]));
    else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
    if (localStorage.getItem("options") === null)
      localStorage.setItem("options", JSON.stringify([]));
    else {
      let optionLocal = JSON.parse(localStorage.getItem("options"));
      setOptions(optionLocal);
    }
    if (localStorage.getItem("categories") === null)
      localStorage.setItem("categories", JSON.stringify("categories"));
    else {
      let optionLocal = JSON.parse(localStorage.getItem("categories"));
      setCategories(optionLocal);
    }
  };

  // Saving todos and categories at localStorage
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("options", JSON.stringify(options));
    localStorage.setItem("categories", JSON.stringify(categories));
  };

  return (
    <div className="App">
      {/* Background images */}
      <img
        src={smallestVector}
        className="smallest-vector"
        alt="smallest-vector"
      ></img>
      <img src={smallVector} className="small-vector" alt="small-vector"></img>
      <img
        src={mediumVector}
        className="medium-vector"
        alt="medium-vector"
      ></img>
      <img src={bigVector} className="big-vector" alt="big-vector"></img>
      <img
        src={closestVector}
        className="closest-vector"
        alt="closest-vector"
      ></img>
      <img
        src={furtherVector}
        className="further-vector"
        alt="further-vector"
      ></img>
      <img
        src={furthestVector}
        className="furthest-vector"
        alt="furthest-vector"
      ></img>
      {/* Container */}
      <div className="main-container">
        <header>
          <h1>TASKS</h1>
        </header>
        <Category
          categories={categories}
          setCategories={setCategories}
          categoryHandler={categoryHandler}
          options={options}
          setOptions={setOptions}
        />
        <Form
          inputText={inputText}
          todos={todos}
          setTodos={setTodos}
          setInputText={setInputText}
          setStatus={setStatus}
          status={status}
          id={id}
          setId={setId}
          categories={categories}
        />
        <TodoList
          setTodos={setTodos}
          todos={todos}
          filteredTodos={filteredTodos}
          categoryHandler={categoryHandler}
          categories={categories}
          filteredCategories={filteredCategories}
        />
      </div>
    </div>
  );
}

export default App;
