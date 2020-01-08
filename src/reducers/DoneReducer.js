import uid from 'uid';

export const DoneReducer = (state,action) =>{
    switch(action.type){
        case 'ADD_DONE':
            let time = new Date();
            return(
            [...state, {
                id:uid(),
                title:action.title,
                success: action.success,
                added:time.toLocaleString()
            }]
            )

        case 'REMOVE_TASK':
            return state.filter(task =>  task.id !== action.id)
            
        default:return state
    }
}