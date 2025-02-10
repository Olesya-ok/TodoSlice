import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./todoSlice";

const store = configureStore({
    reducer: {
        taskValue: taskReducer,
    },
});

export default store;
