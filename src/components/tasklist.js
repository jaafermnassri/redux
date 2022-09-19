import React from 'react'
import { useSelector } from "react-redux";
import Task from '../components/task';
const Tasklist = () => {
    const Tasks = useSelector(state=>state.tasklist)
  return Tasks.map(el=> <Task key={el.id} el={el} />)
}

export default Tasklist