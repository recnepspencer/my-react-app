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
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheets from './components/Stylesheets';
import Inline from './components/Inline';
import './components/appStyles.css'
import styles from './components/appStyles.module.css'
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComponent from './components/PureComponent';
import ParentComp from './components/ParentComp';

function App() {
  return (
    <div className="App">
      <Table></Table>
      <ParentComp></ParentComp>
      {/* <FragmentDemo></FragmentDemo> */}
      {/* <LifecycleA></LifecycleA>
      <Form></Form>
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Inline></Inline>
      <Stylesheets primary={false}></Stylesheets>
      <NameList></NameList> */}
      {/* <UserGreeting></UserGreeting>
      <ParentComponent></ParentComponent>
      <EventBind></EventBind>
      <ClassClick></ClassClick>
      
      <Counter></Counter>

      <Greet  name="Bruce" heroName="Batman">
        <p>This is children props</p>
      </Greet>
      
      <Greet  name="Clark" heroName="Superman">
        <button>Action</button>
      </Greet>
      <FunctionClick></FunctionClick>
      <Greet  name="Diana" heroName="Wonder Woman">
      </Greet>
      <Welcome name="Bruce" heroName="Batman"></Welcome>
      <Welcome name="Clark" heroName="Superman">
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
