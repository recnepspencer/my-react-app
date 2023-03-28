import logo from './logo.svg';
import './App.css';
import Greet from './components/greet';
import Notes from './components/notes';
import { Welcome } from './components/welcome';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">

      <Greet  name="Bruce" heroName="Batman">
        <p>This is children props</p>
      </Greet>
      
      <Greet  name="Clark" heroName="Superman">
        <button>Action</button>
      </Greet>
      <Greet  name="Diana" heroName="Wonder Woman"></Greet>
      <Welcome name="Bruce" heroName="Batman"></Welcome>
      <Welcome name="Clark" heroName="Superman">
        <button>Action</button>
      </Welcome>
      <Welcome name="Diana" heroName="Wonder Woman"></Welcome>
      <Hello></Hello>
      <Notes></Notes>
      
    </div>
  );
}

export default App;
