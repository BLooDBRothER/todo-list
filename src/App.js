import React from "react";
import "./App.css";
import Form from "./components/form";
import Welcome from "./components/header";
import TodoList from "./components/list-item";

function App(){
    return (
        <div className="main-container">
            <Welcome />
            <Form />
            <TodoList />
        </div>
    )
}

export default App;