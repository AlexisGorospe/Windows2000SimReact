import React, {useState} from "react";

import Banner from "./img/banner.png"
import "./style.css"

function About(props){
    const [about_icon, setAbout_icon] = useState(props.about_icon);
    const [about_programName, setAbout_programName] = useState(props.about_programName);

    console.log(about_icon);

    if (about_programName === " "){
        setAbout_programName("Windows")
    }

    const buttonPressed=()=>{
        props.keepProgramOpen(false)
    }


    return(
        <div className={"about"}>
            <img className={"banner"} src={Banner}/>

            <div className={"the_divide"}>
                <div className={"whole_purpose_is_to_contain_an_image"}>
                    <img src={about_icon} className={about_icon ? '' : 'hidden'}/>
                </div>
                <div className={"about_text"}>
                    <p>Microsoft (R) {about_programName}</p>
                    <p>Version 5.0 (Build 2195: Service Pack 4)</p>
                    <p>Copyright (C) 1981-1999 Microsoft Corp.</p>
                    <br/>
                    <p>This product is licensed to:</p>
                    <p>u lol</p>
                    <hr/>
                    <p>Physical memory available to Windows: idk i'm not a real about window</p>
                </div>
            </div>
            <button className={"msg_button"} onClick={buttonPressed}>OK</button>

        </div>
    )
}


export default About;