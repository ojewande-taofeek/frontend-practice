import React from "react";
import './Login.css';

export default function Login() {
    return (
        <div className='App-body'>
            <p>Login to access the full dashboard</p>
            <div className='Input'>
                <div className='Email'>
                    <label htmlFor='email'>Email:</label>
                    <input id='email' name='email' type='email' placeholder='example@mail.com' />
                </div>
                <div className='Password'>
                    <label htmlFor='password'>Password:</label>
                    <input id='password' type='password' name='password' placeholder='yourpassword' />
                </div>
                <button>OK</button>
            </div>
        </div>
    );
}
