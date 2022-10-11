import logo from './logo.svg';
import './App.css';
// import Gretting from './components/pure/Gretting' 
// import GrettingF from './components/pure/GrettingF';
import TaskListComponent from './components/container/task.list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        

        {/*Componente propio grettin.jsx*/}         
        {/* <Gretting name="Becerro"></Gretting>  */}
        {/* <GrettingF name="Carolina"></GrettingF> */}

        {/* Componente de listado de tareas */}
        <TaskListComponent></TaskListComponent>


        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
