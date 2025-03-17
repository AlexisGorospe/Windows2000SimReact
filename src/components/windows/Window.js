import React, {useState} from "react";
import { Rnd } from 'react-rnd';
import "./style.css"

// programs
import Mspaint from "../programs/mspaint/Mspaint";
import Notepad from "../programs/notepad/Notepad";
import About from "../programs/about/About";
import Message from "../programs/message/Message";

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
import { use } from "react";

function Window(props){
    const iconList = {
        0: ico_iexplore, //placeholder
        1: ico_mspaint_image,
        2: ico_notepad,
        3: ico_notepad, //placeholder
    };

    //[program, [width, height], show min and max]
    const programList = {
        0: {
            program: Message,
            dimensions: [205, 120],
            showMinAndMax: false
        },
        1: {
            program: Mspaint,
            dimensions: [700, 700],
            showMinAndMax: true
        },
        2: {
            program: Notepad,
            dimensions: [300, 300],
            showMinAndMax: true
        },
        3: {
            program: About,
            dimensions: [416, 305],
            showMinAndMax: false
        }
    };
    
    const [titlebar, setTitlebar] = useState(props.titlebar);
    const [window_id, setWindow_id] = useState(props.window_id);

    const [maximized, setMaximized] = useState(false)

    const [program, setProgram] = useState(props.program);

    const [max_height, setMaxHeight] = useState(props.max_height);
    const [max_width, setMaxWidth] = useState(props.max_width);

    const [width, setWidth] = useState(props.width)
    const [height, setHeight] = useState(props.height)

    const defaultWindowPosition = [window.screen.width/2 - width/2, window.screen.height/2 - height/2];

    const [isOpen, setIsOpen] = useState(true);
    const [isVisible, setIsVisible] = useState(true);


    //--about window only--
    const [about_icon, setAbout_icon] = useState(props.about_icon);
    const [about_programName, setAbout_programName] = useState(props.about_program_name);

    //--message box only--
    const [message_icon, setMessage_icon] = useState(props.message_icon)
    const [message_text, setMessage_text] = useState(props.message_text)
    const [message_buttons, setMessage_buttons] = useState(props.message_buttons)
    const [message_sound, setMessage_sound] = useState(props.message_sound)

    if (!about_programName){
        setAbout_programName(" ")
    }

    //check if ther user used an in program way to close the window
    const checkIfClosedInProgram = (data) =>{
        setIsOpen(data)
    }

    const ProgramToRender = programList[props.program].program;
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
        <Rnd className={"window"} default={{x: 100, y: 300, width: programList[props.program].dimensions[0], height: programList[props.program].dimensions[1], minHeight: {max_height}, minWidth: {max_width}}} dragHandleClassName={"titlebar"}>
            <div className={"titlebar"}>
                <div className={"titlebar_left"}>
                    <img src={iconList[program]} width={"16px"} height={"16px"} />
                    <p className={"text_bold"}>{titlebar + " " +  about_programName}</p>
                </div>
                <div className={"buttons"}>
                    <button className={`window_button_minimize ${programList[props.program].showMinAndMax ? "" : "hidden"}`}></button>
                    <button className={`window_button_maximize ${programList[props.program].showMinAndMax ? "" : "hidden"}`}></button>
                    <button className={"window_button_close"} onClick={closeProgram}></button>
                </div>
            </div>
            <ProgramToRender
            onDataFromProgram={handleDataFromProgram}

            about_icon={iconList[about_icon]} 
            about_programName={about_programName}

            message_icon={message_icon}
            message_text={message_text}
            message_buttons={message_buttons}
            
            />
        </Rnd>
    )
}

export default Window;