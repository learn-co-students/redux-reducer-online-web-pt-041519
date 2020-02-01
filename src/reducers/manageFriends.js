export function manageFriends(state, action){

    switch(action.type){
        case "ADD_FRIEND":
            return {...state, friends:[...state.friends, action.friend]}
        case "REMOVE_FRIEND":
            const newState = {...state} 
            newState.friends = state.friends.filter(f => f.id !== action.id)
            return newState
        default:
            return state 

    }


}
