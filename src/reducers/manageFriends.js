export function manageFriends(state, action){

    switch(action.type) {
        case 'ADD_FRIEND':
            let newFriend = {
                name: action.friend.name,
                hometown: action.friend.hometown,
                id: action.friend.id
            }
            return ({ friends: [...state.friends, newFriend] })
        case 'REMOVE_FRIEND':
            return ({ friends: state.friends.filter( f => f.id !== action.id) })
        default:
            return state;
    }

}
