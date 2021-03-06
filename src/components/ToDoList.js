import React, {useContext, useState} from 'react';
import { ToDoContext } from '../contexts/ToDoContext'
import ToDoDetails from './ToDoDetails';

const ToDoList = () => {
    const {tasks} = useContext(ToDoContext);
    
    return tasks.length ? (
        <div className="list-of-tasks">
            <ul>
                {tasks.map( task => {
                    return (<ToDoDetails task={task} key={task.id}></ToDoDetails>)
                })}
            </ul>
        </div>
    ) : (
        <div className="list-of-tasks-empty">
            <h1>You have nothing to do, right now.</h1>
        </div>
    )
}

export default ToDoList
