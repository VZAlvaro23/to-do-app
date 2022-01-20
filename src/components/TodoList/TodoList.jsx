import React from "react";

import { Todo } from "..";
import './todolist.css';

const TodoList = ( { setTodos, todos, filteredTodos } ) => {
    
    return (
            <div className = "todo-container">
                <ul className = "todo-list">
                    {filteredTodos.map(todo => (
                        <Todo 
                        text = { todo.text } 
                        todo = { todo } 
                        key = { todo.id } 
                        setTodos = { setTodos } 
                        todos = { todos }
                        />
                    ))}
                </ul>
            </div>
    )
}
export default TodoList;