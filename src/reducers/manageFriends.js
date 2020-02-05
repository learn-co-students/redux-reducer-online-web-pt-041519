export function manageFriends(state = {friends: []}, action){
  // Return state based on action
  switch (action.type) {
    // Non-destructively add friend to array
    case 'ADD_FRIEND':
      return ({
        ...state,
        friends: [...state.friends, action.friend]
      })
    // Non-destructively remove friend from array given action index
    case 'REMOVE_FRIEND':
      const remIndex = state.friends.findIndex(f => f.id === action.id);
      return ({
        ...state,
        friends: [...state.friends.slice(0, remIndex), ...state.friends.slice(remIndex + 1)]
        })
    default:
      return state;
  }
}
