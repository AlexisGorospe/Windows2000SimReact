import React, { useState, useRef } from "react";
import './App.css';

//Sounds
import snd_logon from "./sounds/logon.wav"

//icons
import Icons from "./img/icons/style.css";

import ico_iexplore from "./img/icons/internet_explorer/internet_explorer.ico"

import ico_explorer from "./img/icons/explorer/explorer.ico"
import ico_my_computer from "./img/icons/explorer/my_computer.ico"
import ico_recycle_bin from "./img/icons/explorer/recycle_bin.ico"

import ico_msg_x from "./img/icons/msg/msg_x.ico"
import ico_msg_exclamation from "./img/icons/msg/msg_exclamation.ico"

import ico_mspaint from "./img/icons/mspaint/mspaint.ico"
import ico_mspaint_image from "./img/icons/mspaint/mspaint_image.ico"

import ico_notepad from "./img/icons/notepad/notepad.ico"

import "./assets/style/style_desktopIcons.css"

//Taskbar
import Taskbar from "./components/taskbar/Taskbar";
import './components/taskbar/style.css';

//Window
import Window from "./components/windows/Window";
import "./components/windows/style.css";

//Programs
import Mspaint from "./components/programs/mspaint/Mspaint";
import "./components/programs/mspaint/style.css";

import Notepad from "./components/programs/notepad/Notepad";
import "./components/programs/notepad/style.css";

import * as PropTypes from "prop-types";
import Windows from "./components/windows/WindowsOld [2024-10-30]";

function Draggable(props) {
    return null;
}

Draggable.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
};

const App = () => {
    //state
    const [currentWindowId, setCurrentWindowId] = useState(0);
    const [windows , setWindows] = useState([]);

    //functions
    const createNewWindow = (titlebar = "Untitled - Notepad", program = 1) => {
        console.log(titlebar)
        console.log(program)

        setWindows((prevWindows) => [
            ...prevWindows,
            <Window key={prevWindows.length} titlebar={titlebar}program={program.toString()}/>
        ]);
        console.log(titlebar + program);
    }

    const testfunction = () => {
        console.log("it works");
    }

    //props for icons
    const notepad_props = { //make it so that it works for other programs too
        className: "notepad",
        name: "Notepad",
        program: "notepad"
    }

    return (
        <div className="App">
            <button onClick={createNewWindow}>test button</button>

            <div id={"windows"}>
                {windows.map(window => window)}

                {/*test*/}
                <Window titlebar={"Balls"} icon_class={"2"} program={1}/>
            </div>

            <div id={"desktop_icon_grid"}>
                {/*
                <DesktopIcon
                    className={"internet_explorer"}
                    name={"Internet Explorer"}
                    program={"iexplore"}
                    createNewWindow={createNewWindow}
                />
                <DesktopIcon
                    className={"recycle_bin"}
                    name={"Recycle Bin"}
                    program={"recyclebin"}
                    createNewWindow={createNewWindow}
                />
                */}
                <button className={"desktop_icon"} onDoubleClick={() => {createNewWindow("Untitled - Notepad", 2)}}>
                    <img src={ico_notepad}/>
                    <p>{"Notepad"}</p>
                </button>
                {/*
                <button className={"desktop_icon"} onDoubleClick={this.createNewWindow("Untitled - Notepad","internet_explorer", "notepad")}>
                    <div className={"notepad"}/>
                    <p>{Notepad}</p>
                </button>
                */}
            </div>
            <Taskbar createNewWindow={createNewWindow}/>
        </div>
    );
}

export default App;
