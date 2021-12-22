import React, { useState } from 'react';

import './Add.css'
import Button from './Button';

const Add = ({handleTaskAddition}) => {
    const [inputName, setInputName] = useState([])
    const [inputDesc, setInputDesc] = useState([])

    const handleInputNameChange = (e) => {
        setInputName(e.target.value)
    }
    const handleInputDescChange = (e) => {
        setInputDesc(e.target.value)
    }

    const handleAddTaskClick = () => {
        handleTaskAddition(inputName, inputDesc)
        setInputName('')
        setInputDesc('')
    }

    return ( 
        <div className="add-task-container">
            <input onChange={handleInputNameChange} value={inputName} type="text" className="add-task-input" placeholder='Title'/>
            <div className="add-task-button-container">
                <Button onClick={handleAddTaskClick}>+</Button>
            </div>
            <input onChange={handleInputDescChange} value={inputDesc} type="text" className="add-task-input" placeholder='Description'/>
            <hr className='add-task-line'/>
        </div>
     );
}
 
export default Add;