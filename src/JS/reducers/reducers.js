import { ADD_TASK, DEL_TASK, EDIT_TASK } from "../Consts/consts";
import { v4 as uuidv4 } from 'uuid';
const initialState = {
    tasklist:[],
}

export const TodoReducer =(state=initialState,action)=>{
    switch (action.type) {
        case ADD_TASK :
            return {tasklist : [...state.tasklist,{...action.payload,id:uuidv4()}]}
        case DEL_TASK :
            return {tasklist : state.tasklist.filter(el=>el.id!==action.payload) }
        case EDIT_TASK : 
            return {tasklist : state.tasklist.map(el=>el.id===action.payload.id? {...el,description:action.payload.newDescription} : el)}
        default : 
        return state
    }
}