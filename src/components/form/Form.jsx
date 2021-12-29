import React from 'react';
import './form.css';

const Form = () => {
    return (
        <form>
            <input type = "text" className = "to-do__input">
                <button className = "to-do__button" type  = "submit">
                    el botón
                </button>
            </input>
            <div className = "select__container">
                <select className = "select__content">
                    <option value = "all">All</option>
                    <option value = "completed">Completed</option>
                    <option value = "uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form;