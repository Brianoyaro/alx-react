import React from 'react';
import './login.css';

export default function Login() {
    return (
        <main className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required/><br/>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required/><br/>
        <button type="submit">OK</button>
      </main>
    )
}