import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'; // TODO: study source
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

// ES6 Classes http://javascriptplayground.com/blog/2014/07/introduction-to-es6-classes-tutorial/

class CoursesPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    /* It's important to bind functions in the constructor.
     * If bound in the render function, a new function will be created on each render
     * causing performance issues
     */
    //this.onTitleChange = this.onTitleChange.bind(this);
    //this.onClickSave = this.onClickSave.bind(this);
  }


  render() {
    const courses = this.props.courses;

    return (
      <div>
        <h1>Courses</h1>
        <CourseList courses={courses} />
      </div>
    );
  }
}


CoursesPage.propTypes = {
  //dispatch: PropTypes.func.isRequired, // this is defined in mapDispatchToProps
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses // this "courses" alias is defined in the root reducer (reducers/index.js)
  };
}


function mapDispatchToProps(dispatch) {
  return {
    // createCourse: course => dispatch(courseActions.createCourse(course))
    actions: bindActionCreators(courseActions, dispatch) // alternative to the above method
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
/*  if mapDispatchToProps is omitted, then 'connect' will attach a Disaptch event for us
 *
 *
 *
 *
 *
 * */

/*  The above is the functional programming equivalent of:
 *  const connectStateAndProps = connect(mapStateToProps, mapDispatchToProps);
 *  export default connectedStateAndProps(CoursePage);
 */
