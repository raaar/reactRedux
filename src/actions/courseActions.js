import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';


// it's common to create error actions: LOAD_COURSES_ERROR
export function loadCoursesSuccess(courses) {
  return {
    type: types.LOAD_COURSES_SUCCESS, 
    courses // In ES6 we can omit the right hand side, if it matches the left hand side
  };
}


export function createCoursesSuccess(courses) {
  return {
    type: types.CREATE_COURSES_SUCCESS, 
    course // In ES6 we can omit the right hand side, if it matches the left hand side
  };
}


export function saveCoursesSuccess(courses) {
  return {
    type: types.SAVE_COURSES_SUCCESS, 
    course // In ES6 we can omit the right hand side, if it matches the left hand side
  };
}



export function loadCourses() {
  return function(dispatch) {
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  };
}



export function saveCourses() {
  // getState is a optional paramter to access the Redux store
  // and get particular pieces of state, without passing it as a paramter
  return function(dispatch, getState) {
    return courseApi.saveCourses().then(savedCourse => {
      course.id ? dispatch(updateCourseSuccess(savedCourse)) :
        dispatch(loadCoursesSuccess(savedCourse));
    }).catch(error => {
      throw(error);
    });
  };
}
