import logo from './ALX_logo.jpg';
import './App.css';



export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <main className="App-body">
        <p>Login to access the full dashboard</p>
      </main>
      <footer className="App-footer">
        <p>© Copyright 2020 - ALX</p>
      </footer>
    </div>
    
  );
}

