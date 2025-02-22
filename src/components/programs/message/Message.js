import React, {useState} from "react";

import ico_exclamation from "../../../assets/img/icons/msg/msg_exclamation.ico"
import ico_x from "../../../assets/img/icons/msg/msg_exclamation.ico"

function Message(props){
    const icon_list = {
        0: ico_x,
        1: ico_exclamation 
    }

    const [icon, setIcon] = useState(icon_list[props.message_icon])
    const [text, setText] = useState(props.message_text)
    const [buttons, setButtons] = useState(props.message_buttons)

    

    const sendDataToParent=()=>{
        props.onDataFromProgram(false)
    }

    return(
        <div className={"message"}>
            <img className={"icon_image"} src={icon}/>
            <p>{text}</p>
            <div className={"button_row"}>
                {buttons.map((button, index) => {
                    return (
                        <button key={index} className={"msg_button"} onClick={sendDataToParent}>{button[index]}</button>
                    )
                })}
            </div>
        </div>
    )
}

export default Message;