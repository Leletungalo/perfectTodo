import React from 'react';
import './App.css';

import Forms from "./components/Forms"
import Header from "./components/Header";
import Todos from "./components/Todos";

import TodoState from "./context/todoState"


const App = () => {
  return (
    <TodoState>
    <div className="App">
      <Header />
      <Forms />
      <Todos />
    </div>
    </TodoState>
  );
}

export default App;