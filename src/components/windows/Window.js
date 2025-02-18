import React, {useState} from "react";
import { Rnd } from 'react-rnd';

// programs
import Mspaint from "../programs/mspaint/Mspaint";
import Notepad from "../programs/notepad/Notepad";
import About from "../programs/about/About";

// icons
import ico_iexplore from "../../assets/img/icons/internet_explorer/internet_explorer.ico"

import ico_explorer from "../../assets/img/icons/explorer/explorer.ico"
import ico_my_computer from "../../assets/img/icons/explorer/my_computer.ico"
import ico_recycle_bin from "../../assets/img/icons/explorer/recycle_bin.ico"

import ico_msg_x from "../../assets/img/icons/msg/msg_x.ico"
import ico_msg_exclamation from "../../assets/img/icons/msg/msg_exclamation.ico"

import ico_mspaint from "../../assets/img/icons/mspaint/mspaint.ico"
import ico_mspaint_image from "../../assets/img/icons/mspaint/mspaint_image.ico"

import ico_notepad from "../../assets/img/icons/notepad/notepad.ico"

function Window(props){
    const [titlebar, setTitlebar] = useState(props.titlebar);
    const [window_id, setWindow_id] = useState(props.window_id);

    const [max_height, setMaxHeight] = useState(props.max_height);
    const [max_width, setMaxWidth] = useState(props.max_width);


    const [isOpen, setIsOpen] = useState(true);
    const [isVisible, setIsVisible] = useState(true);

    const [program, setProgram] = useState(props.program);

    //--about window only--
    const [about_icon, setAbout_icon] = useState(props.about_icon);
    const [about_programName, setAbout_programName] = useState(props.about_program_name);

    if (!about_programName){
        setAbout_programName(" ")
    }

    //check if ther user used an in program way to close the window
    const checkIfClosedInProgram = (data) =>{
        setIsOpen(data)
    }


    const programList = {
        1: Mspaint,
        2: Notepad,
        3: About,
    };

    const iconList = {
        1: ico_mspaint_image,
        2: ico_notepad,
        3: ico_notepad, //placeholder
    };

    const ProgramToRender = programList[props.program];
    console.log(program);

    function closeProgram(){
        console.log("this window is supposed to delete itself");
        console.log(props.titlebar);

        setIsOpen(false);
    }

    const handleDataFromProgram = (data)=>{
        setIsOpen(data);
    }

    //unrenders the component if isOpen is not true anymore
    if (!isOpen){
        return null;
    }

    return(
        <Rnd className={"window"} default={{x: 30, y: 30, width: 416, height: 305, minHeight: {max_height}, minWidth: {max_width}}} dragHandleClassName={"titlebar"}>
            <div className={"titlebar"}>
                <div className={"titlebar_left"}>
                    <img src={iconList[program]} width={"16px"} height={"16px"} />
                    <p className={"text_bold"}>{titlebar + " " +  about_programName}</p>
                </div>
                <div className={"buttons"}>
                    <button className={"window_button_minimize"}></button>
                    <button className={"window_button_maximize"}></button>
                    <button className={"window_button_close"} onClick={closeProgram}></button>
                </div>
            </div>
            <ProgramToRender
            onDataFromProgram={handleDataFromProgram}

            about_icon={iconList[about_icon]} 
            about_programName={about_programName}
            
            />
        </Rnd>
    )
}

export default Window;