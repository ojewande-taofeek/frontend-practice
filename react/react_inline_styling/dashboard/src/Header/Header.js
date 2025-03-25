import React from 'react';
import logo from '../assets/alxLogo.jpg';
import { StyleSheet, css } from 'aphrodite';

export default function Header() {
    return (
        <div className={css(headerStyles.appHeader, headerStyles.appHeaderSmall)}>
            <header>
                <img src={logo} alt='ALX-Logo' className={css(headerStyles.img, headerStyles.imgSmall)}/>
                <h1 className={css(headerStyles.h1, headerStyles.h1Small)}>School dashboard</h1>
            </header>
        </div>
    );
}

const headerStyles = StyleSheet.create({
    appHeader: {
    height: '10rem',
    width: '100%',
    borderBottom: '0.3rem solid rgba(241, 34, 110, 0.95)',
    position: 'absolute',
    top: '0',
    left: '0',
    },
    appHeaderSmall: {
        '@media only screen and (max-width: 800px)': {
        top: '8rem',
        height: '7rem',
        borderBottom: '0.2rem solid rgba(241, 34, 110, 0.95)',
        }
    },
    img: {
    height: '9rem',
    aspectRatio: '1',
    },
    imgSmall : {
        '@media only screen and (max-width: 800px)': {
        height: '7rem',
    }},
    h1: {
    display: 'inline',
    color: 'rgba(241, 34, 110, 0.95)',
    position: 'absolute',
    top: '3rem',
    left: '12rem',
    fontWeight: 'bolder',
    fontSize: '2.5rem',
    },
    h1Small: {
        '@media only screen and (max-width: 800px)': {
        fontSize: '1.5rem',
        left: '8rem',
    }},
});
