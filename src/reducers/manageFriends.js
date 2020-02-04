export function manageFriends(state, action){

   switch(action.type) {
      case "ADD_FRIEND":
         // should return the original state + a new friend added 
         // 1. we want to copy the og array, cannot mutate it 
         // 2. we want to place that new friend to the end of the array
         return {...state, friends: [...state.friends, action.friend]}
      case "REMOVE_FRIEND":
         // should return a array of friends with the selected friend removed by id
         // we want array of friends whose id's do not match the action.id
         const newState = {...state}
         newState.friends = state.friends.filter(friend => friend.id !== action.id)
         return newState
      default:
         return state
   }

}
