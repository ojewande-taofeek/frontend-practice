import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Notifications from './Notifications';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);

const root2 = ReactDOM.createRoot(document.getElementById("root-notifications"));
root2.render(
    <StrictMode>
        <Notifications />
    </StrictMode>
)
