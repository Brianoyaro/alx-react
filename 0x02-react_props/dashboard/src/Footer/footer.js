import React from 'react';
import './footer.css';
import { getFullYear, getFooterCopy } from '../utils';

export default function Footer() {
  return (
    <footer className="App-footer">
        {/* <p>© Copyright 2020 - ALX</p> */}
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    )
}