import React from 'react';
import './header.css';
import logo from '../ALX_logo.jpg';

export default function Header() {
  return (
    <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>School dashboard</h1>
          </header>
    )
}