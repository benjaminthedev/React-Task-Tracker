import Task from './Task'

const Tasks = ({ tasks, onRemove }) => {
    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task} onRemove={onRemove}/>                  
            ))}
        </>
    )
}

export default Tasks
