import logo from './logo.svg';
import './App.css';
import Index from './pages/index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className='indexSize'>
        <Index/>
      </div>
        {/* {<img src={logo} className="App-logo" alt="logo" />} */}
      </header>
    </div>
  );
}

export default App;
