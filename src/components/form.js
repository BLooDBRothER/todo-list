import uniqid from 'uniqid';
import addButton from "../Assets/add.svg";

const Form = ({inputText, setInputText, todoList, setTodoList}) => {
    const updateInputText = (e) => {
        setInputText(e.target.value);
    }
    const addToTodoList = (e) => {
        e.preventDefault();
        const id = uniqid();
        setTodoList([...todoList, {
            id,
            value: inputText,
            isCompleted: false
        }]);
        setInputText("");
    }
    const handleEnterEvent = (e) => {
        if(e.code !== "Enter") return;
        addToTodoList(e);
    }
    return(
        <div className="form-container">
            <form action="#">
                <div className="input-container">
                    <input type="text" value={inputText} className="input-text" onChange={updateInputText} onKeyPress={handleEnterEvent}/>
                    <img src={addButton} className="add-button" onClick={addToTodoList} alt="Add List" />
                </div>
                <div className="dropdown-container">
                    <select name="todo-status" className="todo-status">
                        <option value="All">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Form;