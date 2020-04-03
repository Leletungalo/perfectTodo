import React, { useReducer } from "react";
import TodoContext from "./todoContext"
import TodoReduncer from "./todoReduncer"
import { CLEAR_TODOS, ADD_TODO, REMOVE_TODO, SET_COMPLETE } from "./types"
const TodoState = props => {
    const incialState = {
        data: [
            {
                id: 1,
                todo: "Eat dinner with wife",
                completed: false
            },
            {
                id: 2,
                todo: "talk to estee",
                completed: false
            },
            {
                id: 3,
                todo: "phokozi nasiphi axolie",
                completed: true
            },
            {
                id: 4,
                todo: "Eat dinner with wife",
                completed: false
            },
            {
                id: 5,
                todo: "fight corona virus",
                completed: false
            }
        ]
    }

    const [state, dispatch] = useReducer(TodoReduncer, incialState);

    //Set Complited Task
    const setComplete = (id) => dispatch({
        type: SET_COMPLETE,
        payload: id
    });

    //Add todo
    const addingTodo = addedTodo => dispatch({
        type:ADD_TODO,
        payload:addedTodo
    })

    //Remove todo
    const removeTodo = id => dispatch({
        type: REMOVE_TODO,
        payload: id
    });


    //Clear all 
    const clearAll = () => dispatch({ type: CLEAR_TODOS })


    return <TodoContext.Provider
        value={{
            data: state.data,
            setComplete,
            removeTodo,
            clearAll,
            addingTodo
        }}
    >
        {props.children}
    </TodoContext.Provider>;
}

export default TodoState;