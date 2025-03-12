import React from 'react';
import PropTypes from 'prop-types';

const CourseListRow = (({isHeader, textFirstCell, textSecondCell}) => {
    return isHeader ? (
                textSecondCell ? 
            (<tr>
                <th>{textFirstCell}</th>
                <th>{textSecondCell}</th>
            </tr>) :
            (<tr>
                <th colSpan='2'>{textFirstCell}</th>
            </tr>)
            ) :
            (<tr>
                <td>{textFirstCell}</td>
                <td>{textSecondCell}</td>
            </tr>)
});

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null,
};

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;
