import React, { Component } from 'react';
import CourseListRow from './CourseListRow';
import './CourseList.css';
import PropTypes from 'prop-types';

export default class CourseList extends Component {
    render() {
        const { listCourses } = this.props;
    return (
        <div>
            {listCourses.length === 0 ? <h3>No course available yet</h3> :

            <table id='CourseList'>
            <thead>
                <CourseListRow isHeader={true} textFirstCell={'Available courses'} />
                <CourseListRow isHeader={true} textFirstCell={'Course name'} textSecondCell={'Credit'} />
            </thead>
            <tbody>
                {listCourses.map((course) => <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} />)}
                
            </tbody>
        </table>
    }
        
        </div>
    )
}};

const CourseShape = PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        credit: PropTypes.number.isRequired,
    });
CourseList.defaultProps = {
    listCourses: [],
};

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape),
};

