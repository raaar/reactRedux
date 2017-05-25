import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'; // TODO: study source
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';


class ManageCoursesPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, props.course),
      errors: {}
    };


    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourseState = this.saveCourseState.bind(this);
  }

       
  saveCourseState(event) {
    event.preventDefault();
    console.log('save');
    this.props.actions.saveCourse(this.state.course);
  }

  updateCourseState(event) {
    const field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    return this.setState({
      course: course
    });
  }


  render() {
    return (
      <CourseForm 
        allAuthors={this.props.authors}
        onChange={this.updateCourseState}
        onSave={this.saveCourseState}
        course={this.state.course}
        errors={this.state.errors}    
      />
    );
  }
}


ManageCoursesPage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired
};


function mapStateToProps(state, ownProps) {
  let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: '' };

  const authorsFormattedForDropdown = state.authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });


  return {
    course: course,
    authors: authorsFormattedForDropdown
  };
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch) // alternative to the above method
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursesPage);
