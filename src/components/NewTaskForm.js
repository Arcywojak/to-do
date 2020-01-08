import React, {useContext, useState} from 'react'
import {ToDoContext} from '../contexts/ToDoContext'

const NewTaskForm = () => {
const {ToDoDispatch} = useContext(ToDoContext);

    const [title,setTitle] = useState('');
    const [time, setTime] = useState(1);
    const [unit, setUnit] = useState('Minute(s)')

const handleSubmit = (e) => {
    e.preventDefault();

    let timeToSend = time*1000*60; //minutes in milisec
    console.log(timeToSend*60)

    if(unit === 'Hour(s)') timeToSend *= 60; //hours in milisec
    else if(unit === 'Day(s)') timeToSend *= 60*24; //days in milisec

    ToDoDispatch({type:'ADD_TASK',task: 
                {
                    title:title,
                    howLong:timeToSend + new Date().getTime(),
                    unit:unit
                }
})
    setTitle('');
    setTime(1);
}
    return (
        <div className="to-do-form">
            <form className="" onSubmit={(e)=>{handleSubmit(e)}}>
                <h1>Adding new task</h1><div></div>
                <input type="text" required placeholder="Title" value={title} 
                onChange={(e) => { setTitle(e.target.value)}}/>
                
                <div></div>

                <h3>How long do you need to do this?</h3>
                
                <div></div>

                <input type="number" min='1' max='43200' value={time} 
                onChange={(e) => { setTime(e.target.value)}}/>

                <select 
                onChange={(e) => { setUnit(e.target.value)}}>
                    <option>Minute(s)</option>
                    <option>Hour(s)</option>
                    <option>Day(s)</option>
                </select><br/><br/>

                <input type="submit" value="Let's go"/>

            </form>
        </div>
    )
}

export default NewTaskForm
