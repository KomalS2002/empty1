import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h1>This is my Text Editor</h1>
        
      </header>
       <div className='editor'>
         Text Editor
       </div>
    </div>
  );
}

export default App;
