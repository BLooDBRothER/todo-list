import completedIcon from "../Assets/completed.svg";
import deleteIcon from "../Assets/delete.svg";

const TodoList = () => {
    return(
        <div className="todo-container">
            <h2>Your List Item</h2>
            <div className="lists">
                {/* <div className="list true">
                    <h4 className="list-value">Orange</h4>
                    <div className="list-ic">
                        <img src={completedIcon} className="list-completed" alt="Completed" />
                        <img src={deleteIcon} className="list-delete" alt="Remove" />
                    </div>
                </div> */}
            </div>
        </div>

    )
}

export default TodoList;