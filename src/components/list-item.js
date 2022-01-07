import completedIcon from "../Assets/completed.svg";
import deleteIcon from "../Assets/delete.svg";

const ListItem = (props) => {
    return (
        <div className={`list ${props.isCompleted? 'true' : 'false'}`}>
            <h4 className="list-value">{props.value}</h4>
            <div className="list-ic">
                <img src={completedIcon} className="list-completed" alt="Completed" />
                <img src={deleteIcon} className="list-delete" alt="Remove" />
            </div>
        </div>
    )
}

export default ListItem;