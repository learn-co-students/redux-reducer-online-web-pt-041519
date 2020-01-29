export function managePresents(state = { numberOfPresents: 0 }, action) {
    // if (action.type === 'INCREASE') {
    //     return { numberOfPresents: state.count + 1 }
    // }
    switch (action.type) {
        case "INCREASE":
            return Object.assign({}, state, {
                numberOfPresents: state.numberOfPresents + 1
            })

        default:
            return state
    }
}
