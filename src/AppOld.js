import logo from './logo.svg';
import './App.css';

//Taskbar
import Taskbar from "./components/taskbar/Taskbar";
import './components/taskbar/style.css'

//Start Menu
import StartMenu from "./components/start_menu/StartMenu";
import './components/start_menu/style.css'


import * as PropTypes from "prop-types";

function Draggable(props) {
    return null;
}

Draggable.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
};

function App() {
  return (
      <div className="App">

          <Taskbar/>
          <StartMenu/>
      </div>
  );
}

export default App;
