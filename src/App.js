import { useState } from 'react'
import Header from './components/Header'
import Search from './components/Search'
import Task from './components/Tasks'

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
        text: 'Get Food',
        day: '5th Feb 2021',
        reminder: 'true'
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
        reminder: 'true'
    },
    {
        id: 5,
        text: 'Get Jab',
        day: '5th Feb 2020',
        reminder: 'true'
    }

]);


//Remove task
const removeTask = (id) => {
  console.log('task removed', id);
  setTasks(tasks.filter((task) => task.id !== id))
}


  return (
    <div className="container">
      <Header title='ReactJS Task Tracker' />
      <Search />
      {tasks.length > 0 ? (<Task tasks={tasks} onRemove={removeTask}/>) : ('No tasks found please add one')}
    </div>
  );
}

export default App;
