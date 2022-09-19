import { ADD_TASK, DEL_TASK, EDIT_TASK } from "../Consts/consts"


export const addTask = (newTask) => {
    return {
        type: ADD_TASK,
        payload: newTask
    }
}
export const delTask =(id)=> {
    return {
        type: DEL_TASK,
        payload:id
    }
}

export const editTask=(id,newDescription)=>{
    return{
        type: EDIT_TASK,
        payload:{
            id:id,
            newDescription:newDescription
        }
    }
}

