import React, { Component, StrictMode } from 'react';
import logo from './alxLogo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

export default class App extends Component {
    render() {
        return (
            <div className='container'>
                <div className='App-header'>
                    <header>
                        <img src={logo} alt='ALX-Logo' />
                        <h1>School dashboard</h1>
                    </header>
                </div>
                <div className='App-body'>
                    <p>Login to access the full dashboard</p>
                    <div className='Input'>
                        <div className='Email'>
                            <label htmlFor='email'>Email:</label>
                            <input id='email' name='email' type='email' />
                        </div>
                        <div className='Password'>
                            <label htmlFor='password'>Password:</label>
                            <input id='password' type='password' name='password' />
                        </div>
                        <button>OK</button>
                    </div>
                </div>
                <div className='App-footer'>
                    <footer>
                        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
                    </footer>
                </div>
            </div>
        );
    }
}
