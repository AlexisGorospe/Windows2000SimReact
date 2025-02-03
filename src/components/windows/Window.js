import React, {useState} from "react";
import { Rnd } from 'react-rnd';

// programs
import Mspaint from "../programs/mspaint/Mspaint";
import Notepad from "../programs/notepad/Notepad";

// icons
import ico_iexplore from "../../img/icons/internet_explorer/internet_explorer.ico"

import ico_explorer from "../../img/icons/explorer/explorer.ico"
import ico_my_computer from "../../img/icons/explorer/my_computer.ico"
import ico_recycle_bin from "../../img/icons/explorer/recycle_bin.ico"

import ico_msg_x from "../..//img/icons/msg/msg_x.ico"
import ico_msg_exclamation from "../../img/icons/msg/msg_exclamation.ico"

import ico_mspaint from "../..//img/icons/mspaint/mspaint.ico"
import ico_mspaint_image from "../../img/icons/mspaint/mspaint_image.ico"

import ico_notepad from "../../img/icons/notepad/notepad.ico"

function Window(props){
    const [titlebar, setTitlebar] = useState(props.titlebar);
    const [window_id, setWindow_id] = useState(props.window_id);

    const [isOpen, setIsOpen] = useState(true);
    const [isVisible, setIsVisible] = useState(true);

    const [program, setProgram] = useState(props.program);

    const programList = {
        1: Mspaint,
        2: Notepad
    };

    const iconList = {
        1: ico_mspaint_image,
        2: ico_notepad
    };

    const ProgramToRender = programList[props.program];
    console.log(program);

    function closeProgram(){
        console.log("this window is supposed to delete itself");
        console.log(props.titlebar);


        setIsOpen(false);

    }

    //unrenders the component if isOpen is not true anymore
    if (!isOpen){
        return null;
    }

    return(
        <Rnd className={"window"} default={{x: 30, y: 30, width: 300, height: 200, minwidth: 300, minheight: 300}} dragHandleClassName={"titlebar"}>
            <div className={"titlebar"}>
                <div className={"titlebar_left"}>
                    <img src={iconList[program]} width={"16px"} height={"16px"} />
                    <p className={"text_bold"}>{`${props.titlebar}`}</p>
                </div>
                <div className={"buttons"}>
                    <button className={"window_button_minimize"}></button>
                    <button className={"window_button_maximize"}></button>
                    <button className={"window_button_close"} onClick={closeProgram}></button>
                </div>
            </div>
            <ProgramToRender/>
        </Rnd>
    )
}

export default Window;