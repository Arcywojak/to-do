import React, {useContext} from 'react'
import { ToDoContext } from '../contexts/ToDoContext'
import { DoneContext } from '../contexts/DoneContext'

const Header = () => {
    const {tasks} = useContext(ToDoContext);
    const {done} = useContext(DoneContext);

    return (
        <header>
            <h1>Simple "TO-DO" web application</h1>
            <h2>You have {tasks.length} tasks to do and {done.length} done tasks at this moment.</h2>
        </header>
    )
}

export default Header
