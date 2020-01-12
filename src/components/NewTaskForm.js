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

    const setTimeFunction = (char) => {
        if(char === '-' && time > 1){
            setTime(time - 1);
        } else if(char==='+') {
            setTime(time + 1);
        }
    }

    return (
        <div className="to-do-form">
            <form className="form" onSubmit={(e)=>{handleSubmit(e)}}>
                <div className="inside-form">
             <div className="inputs">
                <div className="single-input first">
                    <label for="title">Title:</label> 
                    <input id="title" name="title" type="text" required placeholder="e.g. to go sleeping..." value={title} 
                    onChange={(e) => { setTitle(e.target.value)}}/><br/> 
                </div>
                <div className="single-input second">
                    <label for="time">Duration:</label>
                    <div class="input-number">
                        <input type="button" onClick={() => {setTimeFunction('-')}} value="-"/>
                        <input type="number" 
                        value={time} name="time" id="time" readOnly
                        />
                        <input type="button" onClick={() => {setTimeFunction('+')}} value="+"/>
                    </div>

                    <select 
                    onChange={(e) => { setUnit(e.target.value)}}>
                        <option>Minute(s)</option>
                        <option>Hour(s)</option>
                        <option>Day(s)</option>
                    </select>
                </div>
            </div>

                    <input className="submit-btn" type="submit" value="Add new task"/>

                </div>
            </form>
        </div>
    )
}

export default NewTaskForm
