import logo from './ALX_logo.jpg';
import './App.css';
import { getFooterCopy, getFullYear } from './utils';



export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <main className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required/><br/>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required/><br/>
        <button type="submit">OK</button>
      </main>
      <footer className="App-footer">
        {/* <p>© Copyright 2020 - ALX</p> */}
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
    
  );
}

