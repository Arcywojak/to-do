import React, {useContext} from 'react'
import { ToDoContext } from '../contexts/ToDoContext'
import { DoneContext } from '../contexts/DoneContext'

const Header = () => {
    const {tasks} = useContext(ToDoContext);
    const {done} = useContext(DoneContext);

    return (
        <header>
            <h1>Another do to list...</h1>
        </header>
    )
}

export default Header
