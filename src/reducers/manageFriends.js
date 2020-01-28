export function manageFriends(state={ friends: [] }, action){
    switch(action.type) {
        case 'ADD_FRIEND':
            return { friends: [ {name: "Avi", hometown: 'NYC', id:100}, {name:'Joe', hometown: "Boston", id: 101}] }
        case 'REMOVE_FRIEND':
            let array = Object.values(state)[0].slice()
            for (let i=0; i < array.length; i++) {
                if (array[i].id === action.id)
                    array.splice(i, 1)
            }
            let newObject = {friends: array}
            return newObject

        default:
            return state
    }

}
