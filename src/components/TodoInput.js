import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/todoSlice";

const TodoInput = () => {
    const [taskText, setTaskText] = useState("");
    const dispatch = useDispatch();
    const inputRef = useRef(null);

    const handleAddTask = () => {
        if (taskText.trim()) {
            dispatch(addTask(taskText));
            setTaskText("");
            inputRef.current.focus();
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleAddTask();
        }
    };

    return (
        <div className="todoInput">
            <input
                ref={inputRef}
                type="text"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Add a new task"
            />
            <button onClick={handleAddTask}>Add</button>
        </div>
    );
};

export default TodoInput;


