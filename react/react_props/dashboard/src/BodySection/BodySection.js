import React from 'react';
import './BodySection.css'

export default function BodySection({ title, children }) {
    console.log("BodySection Rendered with title:", title, "and children:", children);
    return (
        <div className='bodySection'>
            {title && <h2>{title}</h2>}
            {children}
        </div>
    )
};
