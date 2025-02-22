import React, {useState} from "react";

import ico_exclamation from "../../../assets/img/icons/msg/msg_exclamation.ico"
import ico_x from "../../../assets/img/icons/msg/msg_exclamation.ico"

function Message(props){
    const icon_list = {
        0: ico_x,
        1: ico_exclamation 
    }

    const [icon, setIcon] = useState(icon_list[props.icon()])
    const [text, setText] = useState(props.text())
    const [buttons, setButtons] = useState()

    

    const sendDataToParent=()=>{
        props.onDataFromProgram(false)
    }

    return(
        <div className={"message"}>
            <img className={"icon_image"}/>
            <p>{icon}</p>
            <div className={"button_row"}>
                {buttons.map*(button => {
                    return (
                        <button className={"msg_button"} onClick={sendDataToParent}>OK</button>
                    )
                })}
            </div>
        </div>
    )
}

export default Message;