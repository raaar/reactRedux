import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.authors, action) { // naming the function is optional

  switch(action.type) {

    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    
    /*              
    case 'CREATE_COURSE':
      return [...state, // ES6 Spread operator (spread the array) returns a new instance of the array
        Object.assign({}, action.course)
      ];
    */

    default:
      return state;
  } 
}
