export function manageFriends(state = {friends: []}, action){
    // state = {
    //     friends: []
    // }
    switch (action.type) {
        case 'ADD_FRIEND':
            return (
                // console.log(action.type),
                {...state, 
                    friends: [
                        ...state.friends,
                        action.friend
              ]
            }
         )
        
        case 'REMOVE_FRIEND':
          return (
              {friends:
                state.friends.filter(friend => friend.id !== action.id)
            }
              
          )

        default:
          return state;
      }
}
