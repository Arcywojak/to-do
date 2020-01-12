import React from 'react'
import happy from '../images/happy.svg';
import sad from '../images/sad.svg';
import trash from '../images/trash.svg';

const ToDoDetails = ( {done, DoneDispatch} ) => {

    const Remove = (e) => {
        let liItem = e.target.parentNode.parentNode;
        liItem.classList.add('move-right');
        
        setTimeout(() => {
            DoneDispatch({type:"REMOVE_TASK", id:done.id});
        },700);

       
    }


    return (
        <li class="li-item done" >
            <div>
             {done.title} 
            </div> 
            <div>
                <img onClick={(e) =>{ Remove(e)}} src={trash}/>
            </div>
        </li>
    )
}

export default ToDoDetails
