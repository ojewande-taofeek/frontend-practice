import React from 'react';
import logo from '../assets/alxLogo.jpg';
import './Header.css';

export default function Header() {
    return (
        <div className='App-header'>
            <header>
                <img src={logo} alt='ALX-Logo' />
                <h1>School dashboard</h1>
            </header>
        </div>
    );
}
