import logo from './logo.svg';
import './App.css';
import Greet from './components/greet';
import Notes from './components/notes';
import { Welcome } from './components/welcome';

function App() {
  return (
    <div className="App">
      <Greet>
      </Greet>
      <Welcome></Welcome>
      <Notes></Notes>
      
    </div>
  );
}

export default App;
