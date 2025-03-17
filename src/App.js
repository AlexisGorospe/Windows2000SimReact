import React, { useState, useRef, useEffect } from "react";
import Clock from "react-live-clock";
import useSound from 'use-sound'; //i wanna play sounds

import './App.css';

// icons
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

//Desktop icons
import "./assets/style/style_desktopIcons.css"

//stuff you will seein every program lmao
import "./assets/style/in_programs/style_menubar.css"
import "./assets/style/in_programs/style_button.css"

//sounds
import snd_chimes from "./assets/sounds/chimes.wav"
import snd_chord from "./assets/sounds/chord.wav"
import snd_ding from "./assets/sounds/ding.wav"
import snd_logon from "./assets/sounds/logon.wav"
import snd_logoff from "./assets/sounds/logoff.wav"

import * as PropTypes from "prop-types";

function Draggable(props) {
    return null;
}

Draggable.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
};

const App = () => {   
    //state-------

    // Windows
    const [currentWindowId, setCurrentWindowId] = useState(0);
    const [windows , setWindows] = useState([]);

    // taskbar and stuff
    const [startMenuOpen, setStartMenuOpen] = useState(false);

    // desktop icons
    const [desktopIcons, setDesktopIcons] = useState([])

    //sound
    const [sound_logon] = useSound(snd_logon)

    //functions-------


    // Window
    const createNewWindow = (titlebar = "Untitled - Notepad", program = 1) => {
        setStartMenuOpen(false)
        console.log(titlebar)
        console.log(program)

        setWindows((prevWindows) => [
            ...prevWindows,
            <Window
                key={prevWindows.length}
                titlebar={titlebar}
                program={program.toString()}
            />
        ]);
        console.log(titlebar + program);
    }

    const createNewMessageWindow = (titlebar, icon, text, buttons) => {
        setStartMenuOpen(false)

        setWindows((prevWindows) => [
            ...prevWindows,
            <Window
                key={prevWindows.length}
                titlebar={titlebar}
                program={0}

                message_icon={icon}
                message_text={text}
                message_buttons={buttons}
            />
        ]);
        console.log(titlebar);
    }

    // Taskbar
    const startClick = () => {
        setStartMenuOpen(!startMenuOpen);
        console.log(startMenuOpen);
    }

    const testfunction = () => {
        console.log("it works");
        sound_logon()
    }


    return (
        <div className="App">
            <button onClick={testfunction} id={"test_button"}>test button</button>

            <div className={"windows"}>
                {windows.map(window => window)}

                {/*test*/}
                <Window titlebar={"This is a test."} icon_class={"2"} program={1}/>
            </div>

            <div id={"desktop_icon_grid"}>
                <button className={"desktop_icon"} onDoubleClick={() => {
                    createNewWindow("Untitled - Notepad", 2)
                }}>
                    <img src={ico_notepad}/>
                    <p>{"Notepad"}</p>
                </button>
                <button className={"desktop_icon"} onDoubleClick={() => {
                    createNewWindow("Untitled - Paint", 1)
                }}>
                    <img src={ico_mspaint}/>
                    <p>{"Paint"}</p>
                </button>
                <button className={"desktop_icon"} onDoubleClick={() => {
                    createNewWindow("About", 3)
                }}>
                    <img src={ico_msg_exclamation}/>
                    <p>{"winver.exe"}</p>
                </button>
                <button className={"desktop_icon"} onDoubleClick={() => {
                    createNewWindow("Internet Explorer", 4)
                }}>
                    <img src={ico_iexplore}/>
                    <p>{"Internet Explorer"}</p>
                </button>
            </div>

            <div id={"taskbar"}>
                <div id={"taskbar_left_side"}>
                    <button id={"startButton"} onClick={startClick} className={startMenuOpen ? 'pressed' : ''}/>
                    <div className={"taskbar_separator"}></div>
                    <div id={"quickLaunch"}>
                        <img src={ico_iexplore} className={"quickLaunchProgram"} onClick={createNewWindow}/>
                    </div>
                    <div className={"taskbar_separator"}></div>
                    <div id={"runningPrograms"}>

                    </div>
                </div>
                <div id={"notificationArea"}>
                    <div id={"notificationIcons"}>

                    </div>
                    <p id={"taskbar_clock"} onClick={() => {createNewMessageWindow("Not implemented", 0, "Feature unavaliable as i have not implemented it yet", [["test", "buttons"]])}}><Clock format={"HH:mm"} ticking={true}/></p>
                </div>

            </div>


            <div id={"start_menu"} className={startMenuOpen ? 'visible' : ''}>
                <p>{startMenuOpen}</p>
                <img id={"start_logo_banner"} src={start_banner}/>
                <div id={"start_menu_programs"}>
                    <div className={"start_program_list"}>
                        <button className={"start_program"} onClick={() => {createNewWindow("Untitled - Notepad", 2)}}>
                            <img src={ico_notepad}/>
                            <p className={"start_program_name"}>Notepad</p>
                        </button>
                        <button className={"start_program"} onClick={() => {createNewWindow("untitled - Paint", 1)}}>
                            <img src={ico_mspaint}/>
                            <p className={"start_program_name"}>Paint</p>
                        </button>
                    </div>
                    <div className={"start_menu_separator"}></div>
                </div>
            </div>

        </div>
    );
}

export default App;
