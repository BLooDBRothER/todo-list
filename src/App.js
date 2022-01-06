import React from "react";
import "./App.css";
import Form from "./components/form";
import Welcome from "./components/header";

function App(){
    return (
        <div className="main-container">
            <Welcome />
            <Form />
        </div>
    )
}

export default App;