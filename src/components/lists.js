import ListItem from "./list-item";

const TodoList = ({filetTodoList, setTodoList}) => {
    return(
        <div className="todo-container">
            <h2>Your List Item</h2>
            <div className="lists">
                {filetTodoList.map((todo) => (
                    <ListItem key={todo.id} todo={todo} todoList={filetTodoList} setTodoList={setTodoList}/>
                ))}
            </div>
        </div>

    )
}

export default TodoList;