/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/form";
import Welcome from "./components/header";
import TodoList from "./components/lists";

function App(){
    const [inputText, setInputText] = useState("");
    const [todoList, setTodoList] = useState([]);
    const [filterTodoList, setFilterTodoList] = useState([]);
    const [isListAdded, setIsListAdded] = useState(false);
    const [status, setStatus] = useState("all");

    const handleStatus = (status, todoList) => {
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
    
    const scrollToBottom = () => {
        if(!isListAdded) return;
        const list_container = document.querySelector(".lists").lastChild;
        list_container.scrollIntoView({ behavior: "smooth" });
        setIsListAdded(false);
    }

    const saveDataToLocalStorage = (todoList) => {
        localStorage.setItem("todoList", JSON.stringify(todoList));
    }

    const getDataFromLocalStorage = () => {
        if(!localStorage.getItem("todoList")) return;
        setTodoList(JSON.parse(localStorage.getItem("todoList")));
    }
    
    useEffect(getDataFromLocalStorage, []);
    
    useEffect(() => {
        handleStatus(status, todoList);
        saveDataToLocalStorage(todoList);
    }, [todoList, status]);

    useEffect(scrollToBottom, [filterTodoList]);

    

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
                    setIsListAdded={setIsListAdded}
                />
                <TodoList 
                    todoList={todoList}
                    filterTodoList={filterTodoList}
                    setTodoList={setTodoList}
                />
            </div>
        </React.StrictMode>
    )
}

export default App;