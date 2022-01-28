import React, { useState, useRef } from "react";
import "./category.css";

const Category = ({
  categories,
  setCategories,
  categoryHandler,
  options,
  setOptions,
}) => {
  const [inputText, setInputText] = useState("");

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  // Función para remplazar el contenido de las opciones con el del input
  const categoryHandler1 = (e) => {
    setCategories(e.target.textContent);
    console.log(categories);
    e.target.textContent = categories;
  };

  // Función para mostrar/ocultar las categorías
  const categoryOptions = document.getElementById("category-options");
  function toogleOptions(e) {
    e.preventDefault();
    categoryOptions.classList.toggle("visibility-hidden");
    categoryOptions.classList.toggle("visibility-visible");
  }

  // Función para añadir categorías al "select"
  // const addCategory = (e) => {
  //   e.preventDefault();
  //   const categoryOptions = document.getElementById("category-options");
  //   const categoryInput = document.getElementById("category-input");
  //   const newCategory = document.createElement('span');
  //   const categoryName = categoryInput.value;
  //   newCategory.textContent = categoryName;
  //   newCategory.onclick = categoryHandler();
  //   categoryOptions.appendChild(newCategory);
  //   categoryInput.value = "";
  // };

  //Función para añadir categorías a la lista

  const addCategory = (e) => {
    e.preventDefault();
    if (inputText === "") {
      window.alert("You must introduce something!");
    } else {
      setOptions([...options, categories]);
      setInputText("");
      setCategories(inputText);
    }
  };

  return (
    <>
      <form className="category-container">
        {/* <form> */}
        <button
          type="submit"
          className="submit-button"
          // onClick={categoryHandler}
          onClick={addCategory}
          // onSubmit={categoryHandler}
        >
          +
        </button>
        {/* <span onChange={categoryHandler}>{categories.toUpperCase()}</span> */}
        <input
          type="text"
          className="category-input"
          id="category-input"
          onChange={inputTextHandler}
          placeholder={categories}
          value={inputText}
        />

        {/* </form> */}
        <button className="category-arrow-button" onClick={toogleOptions}>
          <i className="fa fa-angle-down submit-angle-down"></i>
        </button>
      </form>
      <div className="category-options-container">
        <div
          className="category-options visibility-visible"
          id="category-options"
        >
          {options.map((option) => (
            <span className="option">
              <span onClick={categoryHandler1}>{option}</span>
              <i className="fa fa-trash"></i>
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
