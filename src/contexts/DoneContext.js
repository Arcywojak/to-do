import React, {createContext, useReducer, useEffect} from 'react'
import {DoneReducer} from '../reducers/DoneReducer'

export const DoneContext = createContext();

const DoneContextProvider = ({children}) => {

    const [done, DoneDispatch] = useReducer(DoneReducer, [], () => {
        const localData = localStorage.getItem('done');
        return localData!=='undefined' ? JSON.parse(localData) : []
    });

    useEffect( () => {
        localStorage.setItem('done', JSON.stringify(done))
    }, [done])


    return (
        <DoneContext.Provider value={{done, DoneDispatch}}>
            {children}
        </DoneContext.Provider>
    )
}

export default DoneContextProvider
