import ListItem from "./list-item";

const TodoList = ({todoList, setTodoList}) => {
    return(
        <div className="todo-container">
            <h2>Your List Item</h2>
            <div className="lists">
                {todoList.map((todo) => (
                    <ListItem key={todo.id} todo={todo} todoList={todoList} setTodoList={setTodoList}/>
                ))}
            </div>
        </div>

    )
}

export default TodoList;