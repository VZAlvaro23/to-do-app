import React, { useState } from "react";
import "./category.css";

const Category = ({ categories, setCategories, options, setOptions }) => {
  const [inputText, setInputText] = useState("");
  const [isActive, setIsActive] = useState(false);

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  // Toggling options visibility
  function toogleOptions(e) {
    e.preventDefault();
    setIsActive(!isActive);
  }

  // Adding categories
  const addCategory = (e) => {
    e.preventDefault();
    if (inputText === "") {
      window.alert("You must introduce something!");
    } else {
      setOptions([
        ...options,
        { name: categories, id: new Date().getTime().toString() },
      ]);
      setInputText("");
      setCategories(inputText);
    }
  };

  // Category option component
  const Option = ({ text, option }) => {
    // Changes the category for the selected one
    const categoryHandler1 = () => {
      setCategories(option.name);
      option.name = categories;
    };

    // Category deletion
    const deleteHandler = () => {
      setOptions(options.filter((el) => el.id !== option.id));
      console.log(option.id);
    };

    return (
      <span className="option">
        <span onClick={categoryHandler1}>{text}</span>

        {option.name === "category" || (
          <i className="fa fa-trash" onClick={deleteHandler}></i>
        )}
      </span>
    );
  };

  return (
    <>
      <form className="category-container">
        <button type="submit" className="submit-button" onClick={addCategory}>
          +
        </button>
        <input
          type="text"
          className="category-input"
          id="category-input"
          onChange={inputTextHandler}
          placeholder={categories}
          value={inputText}
        />

        <button className="category-arrow-button" onClick={toogleOptions}>
          <i className="fa fa-angle-down submit-angle-down"></i>
        </button>
      </form>
      <div className="category-options-container">
        <div
          className={
            isActive
              ? "category-options visibility-visible"
              : "category-options visibility-hidden"
          }
        >
          {options.map((option) => (
            <Option key={option.id} text={option.name} option={option} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
