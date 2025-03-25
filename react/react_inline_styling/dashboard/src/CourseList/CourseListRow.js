import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';



const CourseListRow = (({isHeader, textFirstCell, textSecondCell}) => {
    const rowStyle = isHeader ? css(CourseListRowStyle.headerRow) : css(CourseListRowStyle.bodyRow);
    return (
            <tr className={rowStyle}>
                { isHeader ? (
                        textSecondCell ? (
                        <>
                            <th>{textFirstCell}</th>
                            <th>{textSecondCell}</th>
                        </>
                    ) : (
                        <th colSpan='2'>{textFirstCell}</th>
                )) : (
                <>
                    <td>{textFirstCell}</td>
                    <td>{textSecondCell}</td>
                </>
                )}
            </tr>)
});

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null,
};

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const CourseListRowStyle = StyleSheet.create({
    headerRow: {
        backgroundColor: '#f5f5f5ab',
    },
    bodyRow: {
        backgroundColor: '#deb5b545',
    }
});

export default CourseListRow;
