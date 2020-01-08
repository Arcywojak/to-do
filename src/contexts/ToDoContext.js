import React, {createContext, useEffect, useReducer} from 'react';
import {ToDoReducer} from '../reducers/ToDoReducer'

export const ToDoContext = createContext();

const ToDoContextProvider = ({children}) => {

    const [tasks, ToDoDispatch] = useReducer(ToDoReducer, [], () => {
            const localData = localStorage.getItem('tasks');
            return localData!=='undefined' ? JSON.parse(localData) : [] 
        });
            
        useEffect( () => {
            localStorage.setItem('tasks', JSON.stringify(tasks))
        }, [tasks])
    
    return (
        <ToDoContext.Provider value={{tasks, ToDoDispatch}}>
            {children}
        </ToDoContext.Provider>
    )
}

export default ToDoContextProvider
