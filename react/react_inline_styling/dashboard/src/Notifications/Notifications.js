import React, { Component } from 'react';
import icon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

const MenuItem = () => (
    <div className={css(styles.menuItem, styles.menuItemSmall, styles.menuItemHover)}>
        <p>Your notifications</p>
    </div>
);

export default class Notifications extends Component {
    constructor(props) {
        super(props);
        this.markAsRead = this.markAsRead.bind(this);
    }

    markAsRead(id) {
        if (typeof id === 'number') {
            console.log(`Notification ${id} has been marked as read`);
        }
    }

    render() {
        const { displayDrawer, listNotifications } = this.props;

        return (
            <div>
                <MenuItem />
                {displayDrawer && (
                    listNotifications.length === 0 ? (
                        <h5 className={css(styles.h5)}>No new notification for now</h5>
                    ) : (
                        <div className={css(styles.notifications)}>
                            <p className={css(styles.p)}>Here is the list of notifications</p>
                            <ul>
                                {listNotifications.map((notifyList) => (
                                    <NotificationItem
                                        key={notifyList.id}
                                        type={notifyList.type}
                                        value={notifyList.value}
                                        html={notifyList.html}
                                        markAsRead={() => this.markAsRead(notifyList.id)}
                                    />
                                ))}
                            </ul>
                            <button 
                                className={css(styles.closeButton)} 
                                aria-label="Close"
                                onClick={() => console.log('Close button has been clicked')}
                            >
                                <img 
                                    src={icon} 
                                    alt="close"
                                    className={css(styles.closeIcon)}
                                />
                            </button>
                        </div>
                    )
                )}
            </div>
        );
    }
}

Notifications.defaultProps = {
    displayDrawer: true,
    listNotifications: [],
};

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

const translateKeyframes = {
    '0%': {
        transform: 'translate(0px, 0px)',
    },
    '25%': {
        transform: 'translate(3px, 5px)',
    },
    '50%': {
        transform: 'translate(0px, 0px)',
    },
    '75%': {
        transform: 'translate(-2px, -5px)',
    },
    '100%': {
        transform: 'translate(0px, 0px)',
    },
};

const opacityKeyframes = {
    '0%': {
        opacity: '0.5',
    },
    '100%': {
        opacity: '1',
    },
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
        zIndex: 100,
        fontSize: '20px',
    },
    menuItem: {
        position: 'absolute',
        top: '0',
        right: '4rem',
        zIndex: 10,
    },
    menuItemHover: {
        ':hover': {
            animationName: [translateKeyframes, opacityKeyframes],
            animationIterationCount: '3',
            animationDuration: '0.5s, 1s',
            backgroundColor: '#fff8f8',
            cursor: 'pointer',
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
    h5: {
        position: 'absolute',
        top: '2rem',
        right: '4rem',
        fontSize: '1.5rem',
        color: 'blue',
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


