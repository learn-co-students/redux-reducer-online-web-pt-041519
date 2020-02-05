export function managePresents(state = {numberOfPresents: 0}, action){
  // Return state based on action
  switch (action.type) {
    case 'INCREASE':
      return {numberOfPresents: state.numberOfPresents + 1}
    default:
      return state;
  }
}
