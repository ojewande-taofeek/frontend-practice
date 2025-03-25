import React from "react";
import { StyleSheet, css } from "aphrodite";

export default function Login() {
    return (
        <div className={css(LoginStyles.appBody, LoginStyles.appBodySmall)}>
            <p>Login to access the full dashboard</p>
            <div className={css(LoginStyles.input, LoginStyles.inputSmall)}>
                <div className={css(LoginStyles.emailSmall)}>
                    <label htmlFor='email' className={LoginStyles.label}>Email:</label>
                    <input id='email' name='email' type='email' placeholder='example@mail.com' className={LoginStyles.emailInput}/>
                </div>
                <div className='Password'>
                    <label htmlFor='password' className={LoginStyles.label}>Password:</label>
                    <input id='password' type='password' name='password' placeholder='yourpassword' className={LoginStyles.emailInput}/>
                </div>
                <button className={css(LoginStyles.button, LoginStyles.buttonSmall)}>OK</button>
            </div>
        </div>
    );
}

const LoginStyles = StyleSheet.create({
    appBody: {
    position: 'absolute',
    top: '1.5rem',
    left: '2rem',
    fontSize: '1.5rem',
    width: '100%',
    },
    appBodySmall: {
        '@media only screen and (max-width: 800px)': {
        top: '1rem',
        fontSize: '1rem',
        left: '1rem',
        }
    },
    input: {
        position: 'relative',
        top: '-0.5rem',
        display: 'flex',
        flexDirection: 'row',
        width: '50%',
        height: '2rem',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    inputSmall: {
        '@media only screen and (max-width: 800px)': {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        }
    },
    label: {
        paddingRight: '0.5rem',
        paddingLeft: '0; ',
    },
    emailInput: {
        flexGrow: '2',
    },
    passwordLabel: {
        paddingLeft: '0.4rem',
    },
    passwordLabelSmall: {
        '@media only screen and (max-width: 800px)': {
            paddingLeft: '0.1rem',
        }
    },
    button: {
        marginLeft: '0.5rem',
        fontWeight: 'bold',
        fontSize: '1rem',
        cursor: 'pointer',
    },
    buttonSmall: {
        '@media only screen and (max-width: 800px)': {
        marginLeft: '0',
        marginTop: '0.5rem',
        fontSize: '0.5rem',
        }
    },

    emailSmall: {
    '@media only screen and (max-width: 800px)': {
       marginTop: '0.5rem',
    }},

    passwordSmall: {
    '@media only screen and (max-width: 800px)': {
       marginTop: '0.5rem',
    }},
});
