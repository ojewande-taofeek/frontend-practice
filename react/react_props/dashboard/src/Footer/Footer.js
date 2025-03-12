import React from "react";
import './Footer.css';

import { getFullYear, getFooterCopy } from '../utils/utils';

export default function Footer() {
    return (
        <div className='App-footer'>
            <footer>
                <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
            </footer>
        </div>
    );
}
