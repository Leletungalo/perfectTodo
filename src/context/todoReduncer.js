import {CLEAR_TODOS,ADD_TODO,REMOVE_TODO, SET_COMPLETE} from "./types";

export default (state,action) => {
    
    switch(action.type){
        case SET_COMPLETE:
             const tempArr = [];
                for(let i = 0; i < state.data.length;i++){
                    const element = state.data[i];
                    if(element.id === action.payload){
                        const tempOb = {
                            id: element.id,
                            todo: element.todo,
                            completed: !element.completed
                        }
                        tempArr.push(tempOb);
                    }else{
                        tempArr.push(element);}
                }
                return {data:tempArr};
        case ADD_TODO:
            const tempArr2 = [...state.data];
            const tempOb2 = {
                id:state.data.length +1,
                todo:action.payload,
                completed: false
            }
            tempArr2.push(tempOb2);
            console.log(tempArr2);
            return {data:tempArr2}
        case REMOVE_TODO:
            return {data: state.data.filter((element) => element.id !== action.payload)}
        case CLEAR_TODOS:
            return {data:[]}
        default:
            return state
    }
}