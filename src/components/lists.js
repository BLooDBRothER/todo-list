import ListItem from "./list-item";

const TodoList = ({filterTodoList, setTodoList, todoList}) => {
    return(
        <div className="todo-container">
            <h2 className="todo-title">Your List Item</h2>
            <div className="lists">
                {filterTodoList.map((todo) => (
                    <ListItem key={todo.id} todo={todo} todoList={todoList} setTodoList={setTodoList}/>
                ))}
            </div>
        </div>

    )
}

export default TodoList;