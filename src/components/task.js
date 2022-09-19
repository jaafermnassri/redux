import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { delTask } from "../JS/actions/actions";
import { useNavigate } from "react-router-dom";

const Task = ({ el }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div>
      <h1>{el.description}</h1>
      <button onClick={() => dispatch(delTask(el.id))}>del</button>
      <button onClick={() => navigate(`/tasks/${el.id}`)}>Edit</button>
      <div>
        <input
          type="checkbox"
          id="tsk"
          name="taskx"
          defaultValue="done"
          checked={isChecked}
          onChange={handleOnChange}
        />
        <label htmlFor="taskx">Done</label>
      </div>
    </div>
  );
};

export default Task;
