import 'babel-polyfill'; // pulls in polyfills, including Object.assign
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { Router, browserHistory} from 'react-router';
import routes from './routes';
import {loadCourses} from './actions/courseActions';
import {loadAuthors} from './actions/authorActions';
import './styles/styles.css'; // Webpack can import css files too
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore(); // here you could pass initial state that comes from the server or local storage
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);




/*
Provider:
is a higher order component that attaches the store to our React container component


This is a named import called A:
import { A } from './A'



Actions
Reducers
React view (mapStateToProps)
*/

