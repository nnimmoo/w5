import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext";
function Task(props) {
    const { translate } = useLanguage();
    return (
        <>
            <h3>{props.Taskname}</h3>
            <p className={`task-${props.status}`}>{`Task created by ${props.name} ${props.surname}`}</p>
            <p>{`Deadline: ${props.deadline}`}</p>
            <Link to={`/redact/${props._uuid}`}><button>{translate('editTask')}</button></Link>
        </>
    )
}
export default Task;