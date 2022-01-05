import axios from 'axios';
import React, { useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router';

import Button from './Button'
import './Info.css'

const TaskDetails = () => {
    const params = useParams()
    const history = useHistory()
    const [task, setTask] = useState([])
    const url = `http://localhost:3000/${params.id}`

    useEffect(() => {
        const fetchTasks = async () => {
            const { data } = await axios.get(url)
            setTask(data)
        }
        fetchTasks()
      }, [])

    const handleBackButtonClick = () => {
        history.goBack()
    }
    return ( 
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>&lt;=</Button>
            </div>
            <div className="task-details-container" style={task.status ? {borderLeft: '6px solid #AF02EB'} : {}}>
                <h2>| {task.name}</h2>
                <p>
                    {task.description}
                </p>
            </div>
        </>
     );
}
 
export default TaskDetails;