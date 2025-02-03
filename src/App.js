import React, { useState, useRef } from "react";
import Clock from "react-live-clock";

import './App.css';

//Sounds
import snd_logon from "./assets/sounds/logon.wav"


// icons
import "./assets/style/style_desktopIcons.css"

import ico_iexplore from "./assets/img/icons/internet_explorer/internet_explorer.ico"

import ico_explorer from "./assets/img/icons/explorer/explorer.ico"
import ico_my_computer from "./assets/img/icons/explorer/my_computer.ico"
import ico_recycle_bin from "./assets/img/icons/explorer/recycle_bin.ico"

import ico_msg_x from "./assets/img/icons/msg/msg_x.ico"
import ico_msg_exclamation from "./assets/img/icons/msg/msg_exclamation.ico"

import ico_mspaint from "./assets/img/icons/mspaint/mspaint.ico"
import ico_mspaint_image from "./assets/img/icons/mspaint/mspaint_image.ico"

import ico_notepad from "./assets/img/icons/notepad/notepad.ico"

//Start Menu
import start_banner from "./assets/img/start_banner.png"
import "./assets/style/style_startMenu.css"

//Taskbar
import "./assets/style/style_taskbar.css"

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

    // Windows
    const [currentWindowId, setCurrentWindowId] = useState(0);
    const [windows , setWindows] = useState([]);

    // taskbar and stuff
    const [startMenuOpen, setStartMenuOpen] = useState(false);

    // Window
    const createNewWindow = (titlebar = "Untitled - Notepad", program = 1) => {
        console.log(titlebar)
        console.log(program)

        setWindows((prevWindows) => [
            ...prevWindows,
            <Window key={prevWindows.length} titlebar={titlebar}program={program.toString()}/>
        ]);
        console.log(titlebar + program);
    }

    // Taskbar
    const startClick = () => {
        setStartMenuOpen(!startMenuOpen);
        console.log(startMenuOpen);
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
                <Window titlebar={"This is a test."} icon_class={"2"} program={1}/>
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

            <div id={"taskbar"}>
                <div id={"taskbar_left_side"}>
                    <button id={"startButton"} onClick={startClick} className={startMenuOpen ? 'pressed' : ''}/>
                    <div className={"taskbar_separator"}></div>
                    <div id={"quickLaunch"}>
                        {/*
                        {
                            this.state.quickStartPrograms.map((program) => {
                                return (
                                    <div className={"quickStartProgram"} >

                                    </div>
                                )
                            })
                        }
                        */}

                        <img src={ico_iexplore} className={"quickLaunchProgram"} onClick={createNewWindow}/>
                    </div>
                    <div className={"taskbar_separator"}></div>
                    <div id={"runningPrograms"}>

                    </div>
                </div>
                <div id={"notificationArea"}>
                    <div id={"notificationIcons"}>

                    </div>
                    <p id={"start_clock"}><Clock format={"HH:mm"} ticking={true}/></p>
                </div>

            </div>


            <div id={"start_menu"} className={startMenuOpen ? 'visible' : ''}>
                <p>{startMenuOpen}</p>
                <img id={"start_logo_banner"} src={start_banner}/>
                <div id={"start_menu_programs"}>
                    <div className={"start_program_list"}>
                        <button className={"start_program"} onClick={startClick}>
                            <img src={ico_iexplore}/>
                            <p className={"start_program_name"}>Internet Explorer</p>
                        </button>
                    </div>
                    <div className={"start_menu_separator"}></div>
                </div>
            </div>

        </div>
    );
}

export default App;
