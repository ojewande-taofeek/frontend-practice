import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

const NotificationItem = ({ type = 'default', value, html, markAsRead = () => {} }) => {
    const styleType = type === 'urgent' ? styles.urgent : styles.default;

    return html ? (
        <li 
            data-notification-type={type} 
            dangerouslySetInnerHTML={{ __html: html.__html }} 
            onClick={markAsRead} 
            className={css(styleType, styles.list)}
        />
    ) : (
        <li 
            data-notification-type={type} 
            onClick={markAsRead} 
            className={css(styleType, styles.list)}
        >
            {value}
        </li>
    );
};

NotificationItem.propTypes = {
    type: PropTypes.oneOf(['default', 'urgent']),
    value: PropTypes.string,
    html: PropTypes.shape({
        __html: PropTypes.string,
    }),
    markAsRead: PropTypes.func,
};

const styles = StyleSheet.create({
    default: {
        color: 'rgb(59, 59, 230)',
    },
    urgent: {
        color: 'red',
    },
    list: {
        borderBottom: '0.1rem solid black',
        padding: '10px 8px',
        fontSize: '20px',
    },
});

export default NotificationItem;
