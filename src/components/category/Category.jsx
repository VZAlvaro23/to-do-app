import React from "react";
import "./category.css";

const Category = ({ categories, setCategories, categoryHandler }) => {
  // Función para remplazar el contenido de las opciones con el del input
  const categoryHandler1 = (e) => {
    setCategories(e.target.textContent);
    // console.log(e.target.textContent);
    console.log(categories);
    e.target.textContent = categories;
    // categoryHandler();
  };

  // Función para mostrar/ocultar las categorías
  const categoryOptions = document.getElementById("category-options");
  function toogleOptions() {
    categoryOptions.classList.toggle("visibility-hidden");
    categoryOptions.classList.toggle("visibility-visible");
  }

  // Función para añadir categorías al "select"
  const addCategory = (e) => {
    e.preventDefault();
    const categoryOptions = document.getElementById("category-options");
    const categoryInput = document.getElementById("category-input");
    const newCategory = document.createElement('span');
    const categoryName = categoryInput.value;
    newCategory.textContent = categoryName;
    newCategory.onclick = categoryHandler();
    categoryOptions.appendChild(newCategory);
    categoryInput.value = "";
  };

  return (
    <>
      <div className="category-container">
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
            placeholder={categories.toUpperCase()}
          />
        {/* </form> */}
        <button className="category-arrow-button" onClick={toogleOptions}>
          <i className="fa fa-angle-down submit-angle-down"></i>
        </button>
      </div>
      <div className="category-options-container">
        <div
          className="category-options visibility-visible"
          id="category-options"
        >
          <span onClick={categoryHandler1}>school</span>
          <span onClick={categoryHandler1}>work</span>
          <span onClick={categoryHandler1}>home</span>
        </div>
      </div>
    </>
  );
};

export default Category;
