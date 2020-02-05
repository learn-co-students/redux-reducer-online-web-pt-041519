export function manageFriends(state= [], action){

    switch (action.type) {
        case "ADD_FRIEND":
            console.log(action.friend)
            return {...state, friends:  [...state.friends, action.friend] } 
            case "REMOVE_FRIEND":
                const goodFriends = state.friends.filter( goodFriend =>  goodFriend.id !== action.id)
                return {...state, friends: goodFriends} 
        default: 
            return state
    }
}
