import ListItem from "./list-item";

const TodoList = ({filterTodoList, setTodoList, listsRef}) => {
    return(
        <div className="todo-container">
            <h2 className="todo-title">Your List Item</h2>
            <div className="lists">
                {filterTodoList.map((todo) => (
                    <ListItem key={todo.id} todo={todo} todoList={filterTodoList} setTodoList={setTodoList}/>
                ))}
                <div ref={listsRef}></div>
            </div>
        </div>

    )
}

export default TodoList;