import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
       <div className="container">
          <div className="card">
            <h1 className="text-dark">Hola mundo</h1>
            <Button variant='primary' size={'xl'}>Boton</Button>
          </div>
       </div>

      </header>
    </div>
  );
}

export default App;
