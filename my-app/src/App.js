import logo from './logo.svg';
import './App.css';
import Greet from './components/greet';
import Notes from './components/notes';
import { Welcome } from './components/welcome';
import Hello from './components/Hello';
import Message from './components/message';
import Counter from './components/counter';
import FunctionClick from './components/functionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      <ParentComponent></ParentComponent>
      {/* <EventBind></EventBind> */}
      {/* <ClassClick></ClassClick> */}
{/*       
      <Counter></Counter>

      <Greet  name="Bruce" heroName="Batman">
        <p>This is children props</p>
      </Greet>
      
      <Greet  name="Clark" heroName="Superman">
        <button>Action</button>
      </Greet> */}
      {/* <FunctionClick></FunctionClick>
      <Greet  name="Diana" heroName="Wonder Woman">
      </Greet>
      <Welcome name="Bruce" heroName="Batman"></Welcome> */}
      {/* <Welcome name="Clark" heroName="Superman">
        <button>Action</button>
      </Welcome>
      <Welcome name="Diana" heroName="Wonder Woman"></Welcome>
      <Hello></Hello>
      <Notes></Notes>
      <Message></Message> */}
      
    </div>
  );
}

export default App;
