import React from 'react';
import PropTypes from 'prop-types';


const NotificationItem = ({ type='default', value, html, markAsRead=()=>{} }) => {
    return html ? (
            <li  data-notification-type={type} dangerouslySetInnerHTML={html} onClick={markAsRead}></li> 
        ) :
            (<li data-notification-type={type} onClick={markAsRead}>{value}</li>);
};


NotificationItem.propTypes = {
    type: PropTypes.oneOf(["default", "urgent"]),
    value: PropTypes.string,
    html: PropTypes.exact({
        __html: PropTypes.string,
    }),
    markAsRead: PropTypes.func,
};

export default NotificationItem;
