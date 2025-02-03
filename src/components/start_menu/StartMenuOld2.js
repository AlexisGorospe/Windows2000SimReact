import React, { useContext, useState } from "react";
// import { NameContext } from "../../App";

const StartMenu = ({startVisibility}) => {
    // const { startMenuVisibility } = useContext(NameContext);

    /*
    const openProgramThroughStartMenu = (programName) => {

    }

     */

    return (
        //<div id={"start_menu"} className={ startMenuVisibility }>
        <div id={"start_menu"} className={startVisibility ? 'visible' : ''}>
            <div id={"start_logo_banner"}/>
            <div id={"start_menu_programs"}>
                <div className={"start_program_list"}>
                    <div className={"start_program"}>
                        <div className={"start_program_icon internet_explorer"}/>
                        <p className={"start_program_name"}>Internet Explorer</p>
                    </div>
                </div>
                <div className={"start_menu_separator"}></div>
            </div>
        </div>

    )
}

export default StartMenu;