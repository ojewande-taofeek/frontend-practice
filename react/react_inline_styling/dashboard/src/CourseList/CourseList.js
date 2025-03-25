import React, { Component } from 'react';
import CourseListRow from './CourseListRow';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

export default class CourseList extends Component {
    render() {
        const { listCourses } = this.props;
    return (
        <div>
            {listCourses.length === 0 ? <h3 className={css(CourseListStyles.h3)}>No course available yet</h3> :

            <table id='CourseList' className={css(CourseListStyles.courseList, CourseListStyles.small)}>
            <thead className={css(CourseListStyles.thead)}>
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
    listCourses: PropTypes.arrayOf(CourseShape).isRequired,
};

const CourseListStyles = StyleSheet.create({
    courseList : {
        fontSize: '1rem',
        width: '90%',
        borderCollapse: 'collapse',
        border: '0.1rem solid rgb(138, 127, 127)',
    },
    h3: {
        position: 'absolute',
        top: '11rem',
        left: '2rem',
        fontSize: '2rem',
        color: 'rgb(180, 36, 77)',
    },
    small: {
        '@media only screen and (max-width: 800px)': {
        top: '16rem',
        fontSize: '0.8rem',
        left: '1rem',
    }},
    thead: {
        border: '0.2rem solid  rgb(138, 127, 127)',
    },
    th2: {
        textAlign: 'left',
    },
})
