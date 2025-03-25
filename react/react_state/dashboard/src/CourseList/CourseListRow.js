import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';



const CourseListRow = (({isHeader, textFirstCell, textSecondCell}) => {
    const rowStyle = isHeader ? CourseListRowStyle.headerRow : CourseListRowStyle.bodyRow;
    const [isChecked, setCheck] = useState(false);
    const handleCheck = (event) => {
        setCheck(event.target.checked);
    }

    
    return (
            <tr className={css(isChecked ? CourseListRowStyle.rowChecked : rowStyle)}>
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
                    <td onChange={handleCheck}>
                        <input type='checkbox' name={textFirstCell} value={textFirstCell} checked={isChecked}/>
                        {textFirstCell}
                    </td>
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
    },
    rowChecked: {
        backgroundColor: '#e6e4e4',
    },
});

export default CourseListRow;
