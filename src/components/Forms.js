import React,{useState,useContext} from 'react';
import TodoContext from "../context/todoContext"

const Forms = () => {
    const todoContext = useContext(TodoContext);
    const [searchValue, setSearchValue] = useState("");
    const [addTodo, setaddTodo] = useState("");

    const search = (event) => {
        const {value} = event.target;
        setSearchValue(value);
    }

    const searchStayle = {
        width: "100%",
        fontSize: "1rem",
        padding: ".3em 1em",
        color: "black",
        backgroundColor: "lightgrey"
    }

    return (
        <div>
            <input placeholder="Search" 
            style={searchStayle} 
            value={searchValue} 
            onChange={search} />
            <div style={{width:"100%"}}>
                <input style={{width:"90%",
                fontSize: "1rem",
                padding: ".3em 1em",
                color: "black",
                backgroundColor: "lightgrey"}}
                placeholder="add a Todo"
                onChange={(event) => setaddTodo(event.target.value)}
                value={addTodo}
                type="text" />
                <button style={{fontSize:"0.8rem",padding:".2em .8em"}} 
                onClick={() => {
                    todoContext.addingTodo(addTodo);
                    setaddTodo("");
                }}>Add a Todo</button>
            </div>
            <button 
            style={{width:"100%"}}
            onClick={todoContext.clearAll}>Clear</button>
        </div>
    )
}

export default Forms
