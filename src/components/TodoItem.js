import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, toggleTask } from "../redux/todoSlice";

const TodoItem = () => {
    const tasks = useSelector((state) => state.taskValue.task);
    const dispatch = useDispatch();

    return (
        <div className="todoItems">
            {tasks.map((task) => (
                <div
                    key={task.id}
                    className={`todoItem ${task.completed ? "completed" : ""}`}
                >
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => dispatch(toggleTask(task.id))}
                    />
                    <span>{task.text}</span>
                    <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default TodoItem;






