import React from 'react';
import PropTypes from 'prop-types';


const NotificationItem = ({ type, value, html }) => {
    return html ? (
            <li  data-notification-type={type} dangerouslySetInnerHTML={html}></li> 
        ) :
            (<li data-notification-type={type}>{value}</li>);
};

NotificationItem.defaultProps = {
    type: 'default',
};

NotificationItem.propTypes = {
    type: PropTypes.oneOf(["default", "urgent"]),
    value: PropTypes.string,
    html: PropTypes.exact({
        __html: PropTypes.string,
    }),
};

export default NotificationItem;
