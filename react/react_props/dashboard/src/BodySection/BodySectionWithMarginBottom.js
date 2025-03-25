import React from 'react';
import BodySection from './BodySection';
import './BodySectionWithMarginBottom.css';

export default function BodySectionWithMarginBottom({ title, children }) {
    console.log("BodySectionWithMarginBottom Rendered with title:", title, "and children:", children);
    return (
        <div className='bodySectionWithMargin'>
            <BodySection title={title}>{children}</BodySection>
        </div>
    )
}
