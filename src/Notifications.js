import React from 'react';
import './Notifications.css';
import icon from './close-icon.png';
import { getLatestNotification } from './utils';

export default function Notifications() {
    
    return (
        <div className='Notifications'>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
            </ul>
            <button 
                style={{ariaLabel: 'Close', position: 'absolute', top: '0.1rem', right: '0'}} 
                onClick={()=> console.log(`Close button has been clicked`)}>
                    <img src={icon}  style={{width: '1rem', height: '1rem', objectFit: 'contain', backgroundColor: 'white', margin: '0.1rem'}} />
            </button>
        </div>
    )
}