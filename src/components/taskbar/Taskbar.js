import React, {useState} from "react";
import Clock from "react-live-clock";
import StartMenu from "../start_menu/StartMenu";
import '../start_menu/style.css';

// icons
import ico_iexplore from "../../img/icons/internet_explorer/internet_explorer.ico"


function Taskbar({createNewWindow}) {
    const [startMenuOpen, setStartMenuOpen] = useState(false);

    async function startClick() {
        setStartMenuOpen(!startMenuOpen);
        console.log(startMenuOpen);
    }

    return (
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

            <StartMenu visible={startMenuOpen} startMenuProgramClicked={setStartMenuOpen} />
        </div>
    );

}

export default Taskbar;