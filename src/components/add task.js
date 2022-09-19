import React from 'react'
import { useState } from 'react';
import { useDispatch } from "react-redux";
import {addTask} from '../JS/actions/actions';
const TodoAdd = (isChecked) => {
    
    const dispatch = useDispatch()
    const [newTask, setNewTask] = useState({
        description:"",
        isDone:false,
    })
  return (
    <div>
        <input type="text" onChange={e=>setNewTask({...newTask,description:e.target.value})}/>
        <button onClick={()=>dispatch(addTask(newTask))}>add</button>
        
    </div>
  )
}

export default TodoAdd