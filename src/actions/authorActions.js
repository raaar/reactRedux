import * as types from './actionTypes';
import AuthorApi from '../api/mockAuthorApi';


// it's common to create error actions: LOAD_COURSES_ERROR
export function loadAuthorsSuccess(authors) {
  return {
    type: types.LOAD_AUTHORS_SUCCESS, 
    authors // In ES6 we can omit the right hand side, if it matches the left hand side
  };
}


export function loadAuthors() {
  return function(dispatch) {
    return AuthorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSuccess(authors));
    }).catch(error => {
      throw(error);
    });
  };
}
