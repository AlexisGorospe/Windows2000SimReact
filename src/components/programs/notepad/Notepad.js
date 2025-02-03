import React, {useState} from "react";

function Notepad(props) {
    return (
        <div className={"program_notepad"}>
            <div className={"menubar"}>
                {/*https://www.w3schools.com/howto/howto_js_dropdown.asp*/}

                <button>File</button>
                <button>Edit</button>
                <button>Format</button>
                <button>Help</button>
            </div>
            <textarea onChange={props.onChange} value={props.value} name="notepad"></textarea>
        </div>
    );

}

export default Notepad;