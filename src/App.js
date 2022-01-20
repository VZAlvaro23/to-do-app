//Import components useState, useEffect and own components
import React, { useState, useEffect } from "react";
import "./App.css";
import { Form, TodoList } from "./components";

//Import icons from fontawasome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faTrash,
  faCheck,
  faPlus,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

//Import images
import smallestVector from "./assets/vector-muy-pequeno.png";
import smallVector from "./assets/vector-pequeno.png";
import mediumVector from "./assets/vector-mediano.png";
import bigVector from "./assets/vector-grande.png";
import closestVector from "./assets/closest-vector.png";
import furtherVector from "./assets/further-vector.png";
import furthestVector from "./assets/furthest-vector.png";

library.add(fab, faTrash, faCheck, faPlus, faAngleDown, faPlus);

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [id, setId] = useState(0);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

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

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null)
      localStorage.setItem("todos", JSON.stringify([]));
    else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <img
        src={smallestVector}
        className="smallest-vector"
        alt="smalles-vector"
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
      <div className="main-container">
        <header>
          <h1>TASKS</h1>
        </header>
        <Form
          inputText={inputText}
          todos={todos}
          setTodos={setTodos}
          setInputText={setInputText}
          setStatus={setStatus}
          status={status}
          id={id}
          setId={setId}
        />
        <TodoList
          setTodos={setTodos}
          todos={todos}
          filteredTodos={filteredTodos}
        />
      </div>
    </div>
  );
}

export default App;
