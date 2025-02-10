import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    task: [],
};

export const taskSlice = createSlice({
    name: "taskValue",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.task.push({
                id: Date.now(),
                text: action.payload,
                completed: false,
                date: new Date().toLocaleString(),
            });
        },

        deleteTask: (state, action) => {
            state.task = state.task.filter(task => task.id !== action.payload);
        },

        toggleTask: (state, action) => {
            state.task = state.task.map(task =>
                task.id === action.payload
                    ? { ...task, completed: !task.completed }
                    : task
            );
        },

        deleteAllTask: (state) => {
            state.task = [];
        },

        deleteToggleTask: (state) => {
            state.task = state.task.filter(task => !task.completed);
        },
    },
});

export const { addTask, deleteTask,
    toggleTask, deleteAllTask,
    deleteToggleTask } = taskSlice.actions;
export default taskSlice.reducer;
