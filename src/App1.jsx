import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App"> 
      <header className="App-header">
        <h1>First React Project</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React is cool. I hope I can get it<br>
          </br>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Can't believe we are more than .5 way thru</p>
        <ul>
          <li>Salsa</li>
          <li>Bachata</li>
          <li>Disco</li>
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
