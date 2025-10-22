import React from "react";

import Header from "./Components/Header";
import TodoItem from "./Components/Todoitem"; 
import Button from "./Components/Button";
import CounterComponent from "./Components/CounterComponent";

import "./style.css";

const App=()=>{
  return(
    <div className="todo-container">
      <CounterComponent/>
      <Header title="Todoie App"/>
      <TodoItem text="Eat"/>
      <TodoItem text="Code"/>
      <TodoItem text="Play"/>
      <TodoItem text="Study"/>
      <TodoItem text="Sleep Again"/>
      <Button/>
      </div>
  );
};
export default App;
