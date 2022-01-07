import addButton from "../Assets/add.svg";

const Form = () => {
    return(
        <div className="form-container">
            <form action="#">
                <div className="input-container">
                    <input type="text" className="input-text" />
                    <img src={addButton} className="add-button" alt="Add List" />
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