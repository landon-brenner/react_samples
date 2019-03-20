import { combineReducers } from 'redux';

// A reducer to update Redux store for counter example
function count(state = 0, action) {
  switch (action.type) {
    case 'ADD_ONE':
      return state + 1;
    case 'SUB_ONE':
      if (state !== 0) { return state - 1 }
      return state;
    case 'RESET_COUNT':
      return state = 0;
    default:
      return state;
  }
}

export default combineReducers({
  count,
})
