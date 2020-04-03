import React,{useContext} from 'react';
import TodoContext from "../context/todoContext"


const TodoItem = ({todo:{id,todo,completed}}) => {
    const todoContext = useContext(TodoContext);
    
    let headerStayle;
    if(completed){
        headerStayle ={
            textDecoration: "line-through",
            color: "white"
        }
    }else{
        headerStayle ={
            color: "white"
        }
    }

    return (
        <div className="todoItem">
            <button className="done" onClick={todoContext.setComplete.bind(this,id)}>done</button>
            <h2 style={headerStayle}>{todo} </h2>
            <button className="remove" onClick={todoContext.removeTodo.bind(this,id)}>X</button>
        </div>
    )
}

export default TodoItem

