import React, {PropTypes} from 'react';
import CourseListhow from './CourseListRow';


const CourseList = ({ courses, deleteCourse}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>  
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Length</th>
        </tr>
      </thead>
      <tbody>
       {courses.map(course => 
         <CourseListhow key={course.id} course={course} />
       )}
      </tbody>
    </table>
  )
}


CourseList.propTypes = {
  courses: PropTypes.array.isRequired
};


export default CourseList;
