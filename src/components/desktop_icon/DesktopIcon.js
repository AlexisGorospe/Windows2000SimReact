import React, {useState} from "react";

function DesktopIcon({props, createNewWindow}){
    //const [className, setClassName] = React.useState(props.className);
    //const [name, setName] = React.useState(props.name);

    const {name, className} = props;


    function doubleClickDesktopIcon(){
        console.log("You have double clicked: " + name);
        console.log(createNewWindow);
        createNewWindow(name, className, name);
    }

    return(
        <button className={"desktop_icon"} onDoubleClick={doubleClickDesktopIcon}>
            <div className={className}/>
            <p>{name}</p>
        </button>
    )
}

export default DesktopIcon;