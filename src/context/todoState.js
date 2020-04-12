import React, { useReducer } from "react";
import TodoContext from "./todoContext"
import TodoReduncer from "./todoReduncer"
import { GET_TODOS,CLEAR_TODOS, ADD_TODO, REMOVE_TODO, SET_COMPLETE,SEARCH_TODOS } from "./types"
const TodoState = props => {
    const incialState = {
        data: []
    }

    const [state, dispatch] = useReducer(TodoReduncer, incialState);

    //get todos
    const getData = () =>{
        let tojson;
        fetch("localhost:4000/todoapi")
        .then((res) => res.json() )
        .then(data => {
            console.log(data)
            tojson = data})
        .catch(err => console.log(err))
        

        dispatch({
            type: GET_TODOS,
            payload: tojson
        })
    }

    getData();

    //Search todos
    const searchTodo = inputText => dispatch({
        type: SEARCH_TODOS,
        payload: inputText
    })

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
            getData,
            searchTodo,
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