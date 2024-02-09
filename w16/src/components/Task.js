import { Link } from "react-router-dom";

function Task(props) {
    return (
        <>
            <h3>{props.Taskname}</h3>
            <p className={`task-${props.status}`}>{`Task created by ${props.name} ${props.surname}`}</p>
            <p>{`Deadline: ${props.deadline}`}</p>
            <Link to={`/redact/${props._uuid}`}><button>Edit</button></Link>
        </>
    )
}
export default Task;