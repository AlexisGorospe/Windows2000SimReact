import React from "react";

//icons
// import Icons from "./img/icons/style.css";

import ico_iexplore from "../../img/icons/internet_explorer/internet_explorer.ico"


function StartMenu({visible, startMenuProgramClicked}) {
    const clickStartMenuProgram = () => {
        startMenuProgramClicked(false);
    }

    return(
        <div id={"start_menu"} className={visible ? 'visible' : ''}>
            <p>{visible}</p>
            <div id={"start_logo_banner"}/>
            <div id={"start_menu_programs"}>
                <div className={"start_program_list"}>
                    <button className={"start_program"} onClick={clickStartMenuProgram}>
                        <img src={ico_iexplore}/>
                        <p className={"start_program_name"}>Internet Explorer</p>
                    </button>
                </div>
                <div className={"start_menu_separator"}></div>
            </div>
        </div>

    )

}

export default StartMenu;