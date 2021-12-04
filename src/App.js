import logo from './logo.svg';
import './App.css';
import StartGame from './components/StartGame';
import InGame from './components/InGame';

function App() {
  return (
    <div className="App">
      <section className="App-header">
        <StartGame/>
        <InGame/>
      </section>
    </div>
  );
}

export default App;
