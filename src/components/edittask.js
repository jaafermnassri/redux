import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {useParams } from 'react-router-dom'
import { editTask } from '../JS/actions/actions'
const EditTask = () => {
    const [newDescription, setNewDescription] = useState("")
    const params = useParams()
    const dispatch=useDispatch()
    console.log(params.id);
  return (
    <div>
        <input type="text" onChange={(e)=>setNewDescription(e.target.value)}/>
        <button onClick={()=>dispatch(editTask(params.id,newDescription))} >save</button>
    </div>
  )
}

export default EditTask