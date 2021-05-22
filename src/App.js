import { useState } from 'react'
import Header from './components/Header'
import Search from './components/Search'
import Task from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Get Jab',
        day: '5th Feb 2020',
        reminder: 'true'
    },
    {
        id: 2,
        text: 'Get Foods',
        day: '5th Feb 2021',
        reminder: 'false'
    },
    {
        id: 3,
        text: 'Sleep',
        day: '5th Feb 2020',
        reminder: 'true'
    },
    {
        id: 4,
        text: 'Get ssssss',
        day: '5th Feb 2020',
        reminder: 'false'
    },
    {
        id: 5,
        text: 'Get Jab',
        day: '5th Feb 2020',
        reminder: 'true'
    }

]);


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
