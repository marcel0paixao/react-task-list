import React from 'react'

import Task from './Task'

const Tasks = ({ tasks, handleTaskClick, handleTaskDelete }) => {
    return (
        <>
            {tasks.map(task => <Task task={task} handleTaskClick={handleTaskClick} handleTaskDelete={handleTaskDelete} key={task.id}/>)}
        </>
    )
}

export default Tasks