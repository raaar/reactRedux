import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action) { // naming the function is optional

  switch(action.type) {

    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    

    case types.CREATE_COURSE_SUCCESS:
      // in Redux store is immutable, we can't push the new course into the array
      return [...state, Object.assign({}, action.course)];


    case types.UPDATE_COURSE_SUCCESS:
      return [
        // use filter to get an array of all course exept the updated one
        // then create a new array with the new course
        ...state.filter(course => course.id !== action.course.id), 
        Object.assign({}, action.course)
      ];



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
