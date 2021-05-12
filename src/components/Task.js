import { FaBeer, FaTimes } from 'react-icons/fa';
import { ImHappy } from "react-icons/im";

const Task = ({ task, onRemove }) => {
    return (
        <div className="task">
            <h3>{task.text} <FaTimes style={{color: "red", cursor: 'pointer'}} onClick={() => onRemove(task.id)}/></h3>    
            <p>{task.day}</p>
            
            <p>Have a <FaBeer style={{color: "green"}} /></p>
            <p>Have a <ImHappy style={{color: "green"}} /></p>
            
            
        </div>
    )
}

export default Task
