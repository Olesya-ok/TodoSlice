import React from "react";
import { useDispatch } from "react-redux";
import { deleteAllTask, deleteToggleTask } from "../redux/todoSlice";

const FooterButtons = () => {
    const dispatch = useDispatch();

    return (
        <div className="footerButtons">
            <button onClick={() => dispatch(deleteAllTask())}>Delete All</button>
            <button onClick={() => dispatch(deleteToggleTask())}>Delete Completed</button>
        </div>
    );
};

export default FooterButtons;
