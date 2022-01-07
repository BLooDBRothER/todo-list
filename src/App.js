/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
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

    const listsRef = useRef(null);

    const handleStatus = () => {
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
        console.log(listsRef.current);
        listsRef.current.scrollIntoView({ behavior: "smooth" });
    }

    const saveDataToLocalStorage = () => {
        localStorage.setItem("todoList", JSON.stringify(todoList));
    }

    const getDataFromLocalStorage = () => {
        if(!localStorage.getItem("todoList")) return;
        setTodoList(JSON.parse(localStorage.getItem("todoList")));
    }
    
    useEffect(getDataFromLocalStorage, []);
    
    useEffect(() => {
        handleStatus();
        saveDataToLocalStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [todoList, status]);

    useEffect(() => {
        if(!isListAdded) return;
        scrollToBottom();
        setIsListAdded(false);
    }, [filterTodoList]);

    

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
                    filterTodoList={filterTodoList}
                    setTodoList={setTodoList}
                    listsRef={listsRef}
                />
            </div>
        </React.StrictMode>
    )
}

export default App;