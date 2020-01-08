import React, {useContext, useState} from 'react'
import {ToDoContext} from '../contexts/ToDoContext'
import {DoneContext} from '../contexts/DoneContext'
import ok from '../images/ok.svg'
import trash from '../images/trash-black.svg'
import {ChangeComponent} from '../contexts/changeComponentContext';

const ToDoDetails = ( {task} ) => {

    const {ToDoDispatch} = useContext(ToDoContext)
    const {DoneDispatch} = useContext(DoneContext)
    const {component, setComponent} = useState(ChangeComponent)

    let actualTime = new Date().getTime()
    const tab = [];

    tab[task.id] = task.howLong - actualTime;

    const calculateTime = () => {
        let distance = tab[task.id];

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        if(days > 0){

            let hoursGreaterThanZero = hours ? (`and ${hours}h`) : ('');

            if(days === 1){
                return `${days} day ${hoursGreaterThanZero}`;
            } else {
                return `${days} days  ${hoursGreaterThanZero}`;
            }
        } else {

            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = (distance % (1000 * 60 * 60)) / (1000 * 60);

            if(hours > 0){

                let floorMinutes = Math.floor(minutes);
                let minutesGreaterThanZero = floorMinutes ? (`and ${floorMinutes}m`) : ('');
                if(hours === 1){
                    return `${hours} hour ${minutesGreaterThanZero}`;
                } else {
                    return `${hours} hours ${minutesGreaterThanZero}`;
                }
            } else {
                
                if(minutes > 0){

                    minutes = Math.ceil(minutes);

                    if(minutes === 1){
                        return `less than 1 minute`;
                    } else {
                        return `${minutes} minutes`;
                    }
                } else {

                    //remove item from TO-DO, then add to DONE as failed task
                    ToDoDispatch({type:'REMOVE_TASK', id:task.id });
                    DoneDispatch({
                        type:'ADD_DONE',
                        title:task.title,
                        success:false
                     })

                    return 'TIME EXPIRED';
                }
            }
        }
        


    }

    const AddTime = time =>{

        let date = new Date();
        let theTime = date - time;
        theTime = theTime/(100*60*60*60)
        if(theTime < 1){
            return 'Today';
        }else if(theTime < 2) {
            return 'Yesterday';
        }else{
            return `${Math.floor(theTime)} days ago`
        }
    }

    

    return (
        <li className="li-item to-do">
            <div>
                 {task.title}
            </div>
            <div>
                { calculateTime()}
            </div>  
            <div>
                 added: {AddTime(task.addTimeInMilisec)} 
            </div>
            <div className="inside-image" onClick={() => {
                        DoneDispatch({type:'ADD_DONE', title:task.title, success:true})
                        ToDoDispatch({type:'REMOVE_TASK', id:task.id})}
                            }>
            <img src={ok} alt="ok"/></div>
            <div className="inside-image" 
            onClick={ () => {ToDoDispatch({type:'REMOVE_TASK', id:task.id}) }}
            ><img src={trash} alt="trash"/></div>
        </li>
    )
}

export default ToDoDetails
