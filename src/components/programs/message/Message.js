import React, {useEffect, useState} from "react";
import useSound from 'use-sound'; //i wanna play sounds
import "./style.css"

import ico_exclamation from "../../../assets/img/icons/msg/msg_exclamation.ico"
import ico_x from "../../../assets/img/icons/msg/msg_exclamation.ico"

import snd_chimes from "../../../assets/sounds/chimes.wav"
import snd_chord from "../../../assets/sounds/chord.wav"
import snd_ding from "../../../assets/sounds/ding.wav"

function Message(props){
    const icon_list = {
        0: ico_x,
        1: ico_exclamation 
    }

    const sound_list = {
        0: snd_chord,
        1: snd_chord,
        2: snd_ding
    }

    const [icon, setIcon] = useState(icon_list[props.message_icon])
    const [iconID, setIconID] = useState(props.message_icon)
    const [text, setText] = useState(props.message_text)
    const [buttons, setButtons] = useState(props.message_buttons)
    // const [sound] = useSound(sound_list[props.message_icon])  
    const [sound, setSound] = useSound(sound_list[props.message_icon])
    
    
    

    const buttonClicked=()=>{
        props.keepProgramOpen(false)
    }

    useEffect(() => {
        sound()
    })


    return(
        <div className={"message"}>
            <div className={"icon_and_text"}>
                <img className={"icon_image"} src={icon}/>
                <p>{text}</p>
            </div>
            <div className={"button_row"}>
                {buttons.map((button, index) => {
                    return (
                        <button key={index} className={"msg_button"} onClick={buttonClicked}>{button[index]}</button>
                    )
                })}
            </div>
        </div>
    )
}

export default Message;