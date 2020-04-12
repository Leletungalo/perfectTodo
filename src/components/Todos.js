import React,{useContext} from 'react'
import TodoContext from "../context/todoContext"
import TodoItem from "./TodoItem"

const Todos = () => {
    const todoContext = useContext(TodoContext);

    const result = todoContext.data.map((ele) => {
        return <TodoItem key={ele.id} todo={ele} />
    })
    return (
        <div className="todos">
            {result}
        </div>
    )
}

export default Todos

