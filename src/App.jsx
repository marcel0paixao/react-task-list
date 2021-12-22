import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Route} from "react-router-dom"
import axios from "axios"

import Tasks from './components/Tasks'
import Header from './components/Header'
import './App.css'
import Add from "./components/Add"
import Info from "./components/Info"

const App = () => {
  const [tasks, setTasks] = useState([])

  const url = 'http://localhost:3000/'

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get(url)
      setTasks(data)
    }
    fetchTasks()
  }, [])

  const handleTaskClick = (id) => {
    const newTask = tasks.map(task =>{
      if(task.id === id){
        axios.put(url+id, {
          status: !task.status
        }).then(function(){
          setTasks(newTask)
        })
        return {...task, status: !task.status}
      }
      return task
    }) 
    
  }

  const handleTaskDelete = (id) => {
    axios.delete(url+id).then(function () {
      const newTask = tasks.filter(task => task.id !== id)
      setTasks(newTask)
    })
  }

  const handleTaskAddition = (name, description) => {
    axios.post(url, {
      name: name,
      description: description,
      status: false
    }).then(function(response) {
      const newTask = [{
        name: response.data.name,
        description: response.data.description,
        id: response.data.id,
        status: response.data.status
      }, ...tasks]
      setTasks(newTask)
      console.log(newTask[0])
    })
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
              <div className="tasks">
                <Tasks 
                  tasks={tasks} 
                  handleTaskClick={handleTaskClick} 
                  handleTaskDelete={handleTaskDelete}/>
              </div>
            </>
          )}
        />
        <Route
          path="/:id"
          exact
          component={Info}
        />
      </div>
    </Router>
  )
}

export default App