const AddTask = () => {
    return (
        <form className="add-form">
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="add a task"/>
            </div>

            <div className="form-control">
                <label>Day and Time</label>
                <input type="text" placeholder="add day and time"/>
            </div>

            <div className="form-control">
                <label>Reminder</label>
                <input type="checkbox" />
            </div> 

            <input type="submit" value="Save Task"></input>          
        </form>
    )
}

export default AddTask
