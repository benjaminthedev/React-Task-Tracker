import { useState, useEffect } from 'react'
import Header from './components/Header'
import Search from './components/Search'
import Task from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch('http://localhost:5000/tasks');
      const data = await res.json()
      console.log(data);
    }

    fetchTasks()
  }, [])


// Show/Hide the task section area
const [showAddTask, setShowAddTask] = useState(false)

//Need the ability to search through the tasks!

//Add Task
const addTask = (task) => {
  // Giving the ID a random number
  const id = Math.floor(Math.random() * 1000 + 2);

  const newTask = {id, ...task}

  setTasks([...tasks, newTask]);

  console.log(id);
  console.log(task);
} 



//Remove task
const removeTask = (id) => {
  console.log('task removed', id);
  setTasks(tasks.filter((task) => task.id !== id))
}

// Task reminder
// This maps over the reminder and sets state based on user clicking. 
const reminder = (id) => {
  console.log(id);
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
}

  return (
    <div className="container">
      
      <Header title='Task Tracker' onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}  />
      
      {showAddTask && <AddTask onAdd={addTask} />}
      
      <Search />
      {tasks.length > 0 ? (<Task tasks={tasks} onRemove={removeTask} onToggle={reminder}/>) : ('No tasks found please add one')}
    </div>
  );
}

export default App;
