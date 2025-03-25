import React from "react";
import { StyleSheet, css } from "aphrodite";
import { getFullYear, getFooterCopy } from '../utils/utils';

export default function Footer() {
    return (
        <div className={css([FooterStyles.appFooter, FooterStyles.small])}>
            <footer>
                <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
            </footer>
        </div>
    );
}

const FooterStyles = StyleSheet.create({
    appFooter: {
    position: 'absolute',
    bottom: '0.5rem',
    width: '100%',
    borderTop: '0.3rem solid rgba(241, 34, 110, 0.95)',
    fontSize: '1.5rem',
    fontStyle: 'italic',
    textAlign: 'center',
    },
    small: {
        '@media only screen and (max-width: 800px)': {
        bottom: '1rem',
        fontSize: '1rem',
        borderTop: '0.2rem solid rgba(241, 34, 110, 0.95)',
    }},
});
