import uid from 'uid';

export const ToDoReducer = (state,action) =>{
    console.log(state)
    switch(action.type){
        case 'ADD_TASK':
            let time = new Date();
            return( 
            [...state, { 
                id:uid(),
                title:action.task.title,
                howLong:action.task.howLong,
                unitOfTime:action.task.time,
                addTimeInMilisec:time.getTime()
            }]
            )
        case 'REMOVE_TASK':       
            return state.filter(task =>  task.id !== action.id)

        case 'UPDATE_TIME':
            let index = state.findIndex(item => item.id === action.id);         
            let updatedState = state;
            updatedState[index].howLong = action.howLong;
            state = updatedState;

            return state;

        default: return state 
    }
}