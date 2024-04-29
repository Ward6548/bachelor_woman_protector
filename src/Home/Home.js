import logo from './logo.svg';
import '../App.css';
import { getNumber } from '../store';

const LOCALSTORAGE_KEY = "habbesichgesehn";

function App({ action }) {
    if (action && !localStorage.getItem(LOCALSTORAGE_KEY)) {
        action();
        localStorage.setItem(LOCALSTORAGE_KEY, true)
    }

		const number = getNumber();

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
							{number}
            </a>
        </header>
        </div>
    );
}

export default App;