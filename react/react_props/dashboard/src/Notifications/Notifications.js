import React, { Component }from 'react';
import './Notifications.css';
import icon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

const MenuItem = () => {
    return (
        <div className='menuItem'>
            <p>Your notifications</p>
        </div>
    );
};

export default class Notifications extends Component {
    render() {
        const { displayDrawer, listNotifications } = this.props;
    return (
        <div>
            <MenuItem />
           {displayDrawer && 
                (listNotifications.length === 0 ? <h5>No new notification for now</h5>
                :
                <div className='Notifications'>
                    <p>Here is the list of notifications</p>
                    <ul>
                       {listNotifications.map((notifyList) => <NotificationItem 
                       key={notifyList.id}
                       type={notifyList.type}
                       value={notifyList.value}
                       html={notifyList.html} 
                       />)}
                    </ul>
                    <button 
                        style={{ariaLabel: 'Close', position: 'absolute', top: '0.1rem', right: '0'}} 
                        onClick={()=> console.log(`Close button has been clicked`)}>
                            <img src={icon}  style={{width: '1rem', height: '1rem', objectFit: 'contain', backgroundColor: 'white', margin: '0.1rem'}} />
                    </button>
                </div>
                
            )}
      
            
        </div>
    )
}}

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
};

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
};
