import React from 'react';
import { CgClose, CgInfo } from 'react-icons/cg'
import { useHistory } from 'react-router';

import './Task.css'

const Task = ({task, handleTaskClick, handleTaskDelete}) => {
    const history = useHistory()

    const handleTaskInfoClick = () => {
        history.push(`/${task.id}`)
    }
    return (
        <div className="task-container" style={task.status ? {borderLeft: '6px solid chartreuse'} : {}}>
            <div className="task-title" onClick={() => handleTaskClick(task.id)}>
                {task.name ?? task.title}
            </div>
            <div className="buttons-container">
                <button className="info-task-button" onClick={handleTaskInfoClick}>
                    <CgInfo/>
                </button>
                <button className="remove-task-button" onClick={() => handleTaskDelete(task.id)}>
                    <CgClose/>
                </button>
            </div>
        </div>
    );
}

export default Task;