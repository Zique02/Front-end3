import logo from './homem-feliz-dinheiro.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Dinero.
        </p>
        <a
          className="App-link"
          href="https://pt.wikipedia.org/wiki/Dinheiro"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Money
        </a>
      </header>
    </div>
  );
}

export default App;
