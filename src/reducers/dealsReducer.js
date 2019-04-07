import {SAVE_FUEL_SAVINGS, CALCULATE_FUEL_SAVINGS} from '../constants/actionTypes'; 
import objectAssign from 'object-assign';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function fuelSavingsReducer(state = initialState.deals, action) {
  let newState;

  switch (action.type) {
    case SAVE_FUEL_SAVINGS: 
      return objectAssign({}, state, {dateModified: action.dateModified});

    case CALCULATE_FUEL_SAVINGS:
      newState = objectAssign({}, state); 

      return newState;

    default:
      return state;
  }
}
