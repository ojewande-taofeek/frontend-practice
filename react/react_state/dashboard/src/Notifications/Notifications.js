import React, { Component } from 'react';
import icon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

export default class Notifications extends Component {
    render() {
        const { displayDrawer, listNotifications, handleDisplayDrawer, handleHideDrawer, markNotificationAsRead } = this.props;

        return (
            <div>
                <div className={css(styles.menuItem, styles.menuItemSmall, styles.menuItemHover)} onClick={handleDisplayDrawer}>
                    <p>Your notifications</p>
                </div>
                {displayDrawer && (
                    <div className={css(styles.notifications)}>
                        <p className={css(styles.p)}>
                            {listNotifications.length === 0
                                ? 'No new notification for now'
                                : 'Here is the list of notifications'}
                        </p>
                        {listNotifications.length > 0 && (
                            <ul>
                                {listNotifications.map(({ id, type, value, html }) => (
                                    <NotificationItem
                                        key={id}
                                        type={type}
                                        value={value}
                                        html={html}
                                        markNotificationAsRead={() => markNotificationAsRead(id)}
                                    />
                                ))}
                            </ul>
                        )}
                        <button className={css(styles.closeButton)} aria-label="Close" onClick={handleHideDrawer}>
                            <img src={icon} alt="close" className={css(styles.closeIcon)} />
                        </button>
                    </div>
                )}
            </div>
        );
    }
}

Notifications.defaultProps = {
    listNotifications: [],
    displayDrawer: false,
    handleDisplayDrawer: () => {},
    handleHideDrawer: () => {},
    markNotificationAsRead: () => {},
};

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
    handleDisplayDrawer: PropTypes.func,
    handleHideDrawer: PropTypes.func,
    markNotificationAsRead: PropTypes.func,
};

const styles = StyleSheet.create({
    notifications: {
        border: '0.1rem dotted rgb(244, 19, 124)',
        position: 'absolute',
        top: '0rem',
        right: '0rem',
        color: 'black',
        height: '100vh',
        width: '100%',
        padding: '0',
        margin: '0',
        backgroundColor: 'white',
        zIndex: '250',
        fontSize: '20px',
    },
    menuItem: {
        position: 'absolute',
        top: '0',
        right: '4rem',
        zIndex: 10,
        cursor: 'pointer',
    },
    menuItemHover: {
        ':hover': {
            backgroundColor: '#fff8f8',
        },
    },
    menuItemSmall: {
        '@media only screen and (max-width: 800px)': {
            top: '-0.5rem',
            right: '0',
        },
    },
    p: {
        fontWeight: 'bold',
    },
    closeButton: {
        position: 'absolute',
        top: '0.1rem',
        right: '0',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
    },
    closeIcon: {
        width: '1rem',
        height: '1rem',
        objectFit: 'contain',
        backgroundColor: 'white',
        margin: '0.1rem',
    }
});



