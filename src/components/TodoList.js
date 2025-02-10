import React from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import FooterButtons from "./FooterButtons";

const TodoList = () => {
    return (
        <div className="todoList">
            <h2>Todo List</h2>
            <TodoInput/>
            <TodoItem/>
            <FooterButtons/>
        </div>
    );
};

export default TodoList;