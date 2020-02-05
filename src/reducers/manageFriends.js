export function manageFriends(state, action){
    switch (action.type) {
        case 'ADD_FRIEND':
            state.friends.push(action.friend)
            return state
        case 'REMOVE_FRIEND':
            let boo = state.friends.filter(friend  => friend.id !== action.id)
            return {friends: boo}
        default:
            return state
        }


}


//friends: [ { name: 'Avi', hometown: 'NYC', id: 100 }, { name: 'Joe', hometown: 'Boston', id: 101 } ] }
