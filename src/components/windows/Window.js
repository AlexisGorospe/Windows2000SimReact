import React, {useEffect, useState} from "react";
import { Rnd } from 'react-rnd';
import "./style.css"

// programs
import Mspaint from "../programs/mspaint/Mspaint";
import Notepad from "../programs/notepad/Notepad";
import About from "../programs/about/About";
import Message from "../programs/message/Message";
import InternetExplorer from "../programs/internet_explorer/InternetExplorer";
import Welcome from "../programs/welcome/Welcome";

// icons
import ico_logo from "../../assets/img/icons/logo/logo.ico"

import ico_iexplore from "../../assets/img/icons/internet_explorer/internet_explorer.ico"

import ico_explorer from "../../assets/img/icons/explorer/explorer.ico"
import ico_my_computer from "../../assets/img/icons/explorer/my_computer.ico"
import ico_recycle_bin from "../../assets/img/icons/explorer/recycle_bin.ico"

import ico_msg_x from "../../assets/img/icons/msg/msg_x.ico"
import ico_msg_exclamation from "../../assets/img/icons/msg/msg_exclamation.ico"

import ico_mspaint from "../../assets/img/icons/mspaint/mspaint.ico"
import ico_mspaint_image from "../../assets/img/icons/mspaint/mspaint_image.ico"

import ico_notepad from "../../assets/img/icons/notepad/notepad.ico"
import notepad from "../programs/notepad/Notepad";

// buttons
import window_minimize from "./img/window_minimize.png";
import window_maximize from "./img/window_maximize.png";
import window_close from "./img/window_close.png";

import ico_copilot_april_fools from "../../assets/img/icons/this_only_appears_for_an_april_fools_joke/ew.png"
import copilot_april_fools from "../programs/copilot_fake/FakeCopilot"
import ChangeFont from "../programs/notepad/subcomponents/Font";

function Window(props){
    const programList = {
        0: {
            program: Message,
            icon: ico_iexplore,
            dimensions: [205, 120],
            fixedDimensions: true,
            showMinAndMax: false,
            showIcon: false,
        },
        1: {
            program: Mspaint,
            icon: ico_mspaint_image,
            dimensions: [700, 700],
            fixedDimensions: false,
            showMinAndMax: true,
            showIcon: true
        },
        2: {
            program: Notepad,
            icon: ico_notepad,
            dimensions: [300, 300],
            fixedDimensions: false,
            showMinAndMax: true,
            showIcon: true,
        },
        3: {
            program: About,
            icon: ico_logo,
            dimensions: [416, 305],
            fixedDimensions: true,
            showMinAndMax: false,
            showIcon: true
        },
        4: {
            program: InternetExplorer,
            icon: ico_iexplore,
            dimensions: [600, 490],
            fixedDimensions: false,
            showMinAndMax: true,
            showIcon: false
        },
        5: {
            program: Welcome,
            icon: ico_logo,
            dimensions: [482, 349],
            fixedDimensions: true,
            showMinAndMax: false,
            showIcon: true
        },
        6: {
            program: ChangeFont,
            icon: ico_logo,
            dimensions: [300, 300],
            fixedDimensions: true,
            showMinAndMax: false,
            showIcon: false
        },
        90: {
            program: copilot_april_fools,
            icon: ico_logo,
            dimensions: [482, 349],
            showMinAndMax: false,
            showIcon: true
        }
    };

    const iconList = { //exists because the about window refuses to work without it and i hate that
        0: ico_iexplore,
        1: ico_mspaint,
        2: ico_notepad,
        3: ico_logo,
        4: ico_iexplore,
        5: ico_logo,

        90: ico_copilot_april_fools,
    }

    const [titlebar, setTitlebar] = useState(props.titlebar);
    const [window_id, setWindow_id] = useState(props.window_id);

    const [maximized, setMaximized] = useState(false)

    const [currentUnmaximizedPosition, setCurrentUnmaximizedPosition] = useState([100, 300]);

    const [program, setProgram] = useState(props.program);

    // width and heigt
    const defaultWidth = useState(props.width)
    const defaultHeight = useState(props.height)

    const [currentWidth, setCurrentWidth] = useState(programList[props.program].dimensions[0])
    const [currentHeight, setCurrentHeight] = useState(programList[props.program].dimensions[1])

    const defaultWindowPosition = [window.screen.width/2 - defaultWidth/2, window.screen.height/2 - defaultHeight/2];

    const [isOpen, setIsOpen] = useState(true);
    const [isVisible, setIsVisible] = useState(true);

    // your actual window dimensions


    //--about window only--
    const isAboutWindow = useState(program == 3)
    const [about_icon, setAbout_icon] = useState(props.about_icon);
    const [about_programName, setAbout_programName] = useState(props.about_program_name);

    //--message box only--
    const [message_icon, setMessage_icon] = useState(props.message_icon)
    const [message_text, setMessage_text] = useState(props.message_text)
    const [message_buttons, setMessage_buttons] = useState(props.message_buttons)
    const [message_sound, setMessage_sound] = useState(props.message_sound)

    // --notepad only--
    const [notepadChangeFontData, setNotepadChangeFontData] = useState([])

    // functions and stuff

    //  --about--
    if (!about_programName){
        setAbout_programName(" ")
    }

    // --notepad--
    const notepadChangeFont = (data) => {
        console.log(data)
        setNotepadChangeFontData(data)

        props.changeFont(data)
    }

    //check if ther user used an in program way to close the window
    const checkIfClosedInProgram = (data) =>{
        setIsOpen(data)
    }

    const ProgramToRender = programList[props.program].program;
    // console.log(program);
    // console.log(programList[props.program].icon)

    // buttons

    function maximizeClicked(){
        console.log("afjsdlkfsfjklhjioawtrhioi;rgbnujk;u;asgfdbnhujob")
        setMaximized(!maximized)
    }

    function closeProgram(){
        setIsOpen(false);
    }

    const keepProgramOpen = (data) => {
        setIsOpen(data);
    }

    // literally just checks the size of your actual window
    const getWindowSize = () => {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
    }

    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
          setWindowSize(getWindowSize());
        }
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, []);


    //unrenders the component if isOpen is not true anymore
    if (!isOpen){
        return null;
    }

    return(
        <Rnd className={"window"} 
            // make this more dynamic
            default={{
                x: 100, 
                y: 300, 
                width: programList[props.program].dimensions[0], 
                height: programList[props.program].dimensions[1]
            }}
                
            size={{ width: maximized ? windowSize.innerWidth : currentWidth,  height: maximized ? windowSize.innerHeight - 32 : currentHeight}}
            position={{x: maximized ? 0 : currentUnmaximizedPosition[0], y: maximized ? 0 : currentUnmaximizedPosition[1]}}
            onDragStop={(e, d) => { setCurrentUnmaximizedPosition([d.x, d.y])}}
            onResizeStop={(e, direction, ref, delta, position) => {
                setCurrentWidth(ref.style.width)
                setCurrentHeight(ref.style.height)
                setCurrentUnmaximizedPosition(position)
            }}

             maxWidth={programList[props.program].fixedDimensions ? programList[props.program].dimensions[0] : 999999}
             minWidth={programList[props.program].fixedDimensions ? programList[props.program].dimensions[0] : 300}
             maxHeight={programList[props.program].fixedDimensions ? programList[props.program].dimensions[1] : 999999}
             minHeight={programList[props.program].fixedDimensions ? programList[props.program].dimensions[1] : 100}

             dragHandleClassName={"titlebar"}
            >
            <div className={"titlebar"}>
                <div className={"titlebar_left"}>
                    <img src={programList[props.program].icon}/>
                    <p className={"text_bold"}>{titlebar + " " +  about_programName}</p>
                </div>
                <div className={"buttons"}>
                    <button className={`window_button_minimize ${programList[props.program].showMinAndMax ? "" : "hidden"}`}></button>
                    <button className={`${maximized ? "window_button_unmaximize" : "window_button_maximize"} ${programList[props.program].showMinAndMax ? "" : "hidden"}`} onClick={maximizeClicked}></button>
                    <button className={"window_button_close"} onClick={closeProgram}></button>
                </div>
            </div>
            <ProgramToRender

            keepProgramOpen={keepProgramOpen}

            about_icon={iconList[about_icon]}
            about_programName={about_programName ? about_programName : "Windows"}

            notepadChangeFont={notepadChangeFont}

            message_icon={message_icon}
            message_text={message_text}
            message_buttons={message_buttons}
            
            />
        </Rnd>
    )


}

export default Window;