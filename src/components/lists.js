import ListItem from "./list-item";

const TodoList = ({todoList}) => {
    return(
        <div className="todo-container">
            <h2>Your List Item</h2>
            <div className="lists">
                {todoList.map((todo) => (
                    <ListItem key={todo.id} isCompleted={todo.isCompleted} value={todo.value}/>
                ))}
            </div>
        </div>

    )
}

export default TodoList;