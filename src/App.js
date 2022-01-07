import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/form";
import Welcome from "./components/header";
import TodoList from "./components/lists";

function App(){
    const [inputText, setInputText] = useState("");
    const [todoList, setTodoList] = useState([]);
    const [filetTodoList, setFilterTodoList] = useState([]);
    const [status, setStatus] = useState("all");

    const handleStatus = () => {
        console.log(status);
        switch(status){
            case "completed":
                setFilterTodoList(todoList.filter(list => list.isCompleted));
                break;
            case "uncompleted":
                setFilterTodoList(todoList.filter(list => !list.isCompleted));
                break;
            default:
                setFilterTodoList(todoList);
        }
    }
    
    useEffect(handleStatus, [todoList, status]);

    

    return (
        <React.StrictMode>
            <div className="main-container">
                <Welcome />
                <Form 
                    inputText={inputText}
                    setInputText={setInputText}
                    todoList={todoList}
                    setTodoList={setTodoList}
                    setStatus={setStatus}
                />
                <TodoList 
                    filetTodoList={filetTodoList}
                    setTodoList={setTodoList}
                />
            </div>
        </React.StrictMode>
    )
}

export default App;