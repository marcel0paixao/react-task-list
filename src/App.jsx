import React, { useEffect, useState } from "react"
import {v4 as uuidv4} from 'uuid'
import { BrowserRouter as Router, Route} from "react-router-dom"
import axios from "axios"

import Tasks from './components/Tasks'
import Header from './components/Header'
import './App.css'
import Add from "./components/Add"
import Info from "./components/Info"

const App = () => {
  //let message = 'Hello world!'
  const [tasks, setTasks] = useState([
    
  ])

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10')
      setTasks(data)
    }
    fetchTasks()
  }, [])

  const handleTaskClick = (id) => {
    const newTask = tasks.map(task =>{
      if(task.id === id) return {...task, completed: !task.completed}
      return task
    })
    setTasks(newTask)
  }

  const handleTaskDelete = (id) => {
    const newTask = tasks.filter(task => task.id !== id)
    setTasks(newTask)
  }

  const handleTaskAddition = (taskTitle) => {
    const newTask = [...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false
    }]
    
    setTasks(newTask)
  }

  return (
    <Router>
      <div className="container">
        <Header/>
        <Route 
          path="/" 
          exact 
          render={() => (
            <>
              <Add handleTaskAddition={handleTaskAddition}/>
              <Tasks 
                tasks={tasks} 
                handleTaskClick={handleTaskClick} 
                handleTaskDelete={handleTaskDelete}/>
            </>
          )}
        />
        <Route
          path="/:taskTitle"
          exact
          component={Info}
        />
      </div>
    </Router>
  )
}

export default App