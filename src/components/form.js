import uniqid from 'uniqid';
import addButton from "../Assets/add.svg";

const Form = ({inputText, setInputText, todoList, setTodoList, setStatus, setIsListAdded}) => {
    const updateInputText = (e) => {
        setInputText(e.target.value);
    }
    const addToTodoList = (e) => {
        e.preventDefault();
        if(inputText === "") return;
        const id = uniqid();
        setTodoList([...todoList, {
            id,
            value: inputText,
            isCompleted: false
        }]);
        setIsListAdded(true);
        setInputText("");
    }
    const handleEnterEvent = (e) => {
        if(e.code !== "Enter" && e.code !== "NumpadEnter") return;
        addToTodoList(e);
    }
    const handleStatus = (e) => {
        setStatus(e.target.value);
    }
    return(
        <div className="form-container">
            <form action="#">
                <div className="input-container">
                    <input type="text" value={inputText} className="input-text" onChange={updateInputText} onKeyPress={handleEnterEvent}/>
                    <img src={addButton} className="add-button" onClick={addToTodoList} alt="Add List" />
                </div>
                <div className="dropdown-container">
                    <select name="todo-status" className="todo-status" onChange={handleStatus}>
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Form;