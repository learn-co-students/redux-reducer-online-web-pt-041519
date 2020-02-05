// let state = {
//     friends: [
//         {
//             name: "Avi",
//             hometown: "NYC",
//             id: 100 
//         }
//     ]
// }
// let action = {
//     type: "ADD_FRIEND",
//     friend: {
//         name: "Joe",
//         hometown: "Boston",
//         id: 101 
//     }
// }

export function manageFriends(state = { friends: [] }, action){
    switch (action.type) {
        case "ADD_FRIEND":
            return (
                {...state, friends: [...state.friends, action.friend]}
            )
        case "REMOVE_FRIEND":
            // let index = state.friends.findIndex(friend => friend.id === action.id)
            let newState = state.friends.filter(friend => friend.id !== action.id)
            return (
                // Object.assign({}, state, {friends: newState})
                {...state, friends: newState}
            )
        default:
            return state
    }
}
