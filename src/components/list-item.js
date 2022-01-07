import completedIcon from "../Assets/completed.svg";
import deleteIcon from "../Assets/delete.svg";

const ListItem = ({todo, todoList, setTodoList}) => {
    const deleteList = (e) => {
        setTodoList(todoList.filter(list => list.id !== todo.id));
    }
    const toggleListCompleted = (e) => {
        setTodoList(todoList.map(list => {
            if(list.id === todo.id){
                return {...list, isCompleted: !list.isCompleted};
            }
            return list;
        }))
    }
    return (
        <div className={`list ${todo.isCompleted? 'true' : 'false'}`}>
            <h4 className="list-value">{todo.value}</h4>
            <div className="list-ic">
                <img src={completedIcon} className="list-completed" onClick={toggleListCompleted} alt="Completed" />
                <img src={deleteIcon} className="list-delete" onClick={deleteList} alt="Remove" />
            </div>
        </div>
    )
}

export default ListItem;