import React from 'react'

const ToDoDetails = ( {done, DoneDispatch} ) => {


    return (
        <li class="li-item done" >
            <div>
                {done.id}. {done.title} {done.success ? 'WIN' : 'FAILURE'}
            </div> 
            <div>
                Done: {done.added} 
                <button onClick={() =>{ console.log("AAA");DoneDispatch({type:"REMOVE_TASK", id:done.id})}}>USUN</button>
            </div>
        </li>
    )
}

export default ToDoDetails
