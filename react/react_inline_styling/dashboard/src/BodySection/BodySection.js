import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default function BodySection({ title, children }) {
    return (
        <div className={css([BodySectionStyles.bodySection, BodySectionStyles.h2, BodySectionStyles.small])}>
            {title && <h2>{title}</h2>}
            {children}
        </div>
    )
};

const BodySectionStyles = StyleSheet.create({
    bodySection: {
        position: 'relative',
        top: '9rem',
    },
    h2: {
        marginBottom: '-1px',
    },
    small: {
        '@media only screen and (max-width: 800px)': {
            top: '14rem'
        }
    }
})
