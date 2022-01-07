import React, { useState } from "react";
import "./App.css";
import Form from "./components/form";
import Welcome from "./components/header";
import TodoList from "./components/lists";

function App(){
    const [inputText, setInputText] = useState("");
    const [todoList, setTodoList] = useState([]);
    return (
        <React.StrictMode>
            <div className="main-container">
                <Welcome />
                <Form 
                    inputText={inputText}
                    setInputText={setInputText}
                    todoList={todoList}
                    setTodoList={setTodoList}
                />
                <TodoList 
                    todoList={todoList}
                    setTodoList={setTodoList}
                />
            </div>
        </React.StrictMode>
    )
}

export default App;