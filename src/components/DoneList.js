import React, {useContext, useState} from 'react';
import {DoneContext} from '../contexts/DoneContext'
import DoneDetails from './DoneDetails';

const ToDoList = () => {
    const {done, DoneDispatch} = useContext(DoneContext);

    return done.length ? (
        <div className="list-of-tasks">
            <ul>
                {done.map( done => {
                    return (<DoneDetails DoneDispatch={DoneDispatch} done={done} key={done.id}></DoneDetails>)
                })}
            </ul>
        </div>
    ) : (
        <div className="list-of-tasks-empty">
            <h1>You have done nothing at this moment</h1>
        </div>
    )
}

export default ToDoList
