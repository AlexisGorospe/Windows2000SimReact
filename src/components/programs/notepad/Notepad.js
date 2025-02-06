import React, {useState} from "react";

function Notepad(props) {
    const [fileDDM, setFileDDM] = useState(false)
    const [textAreaContent, setTextAreaContent] =  useState("")

    function handleTextAreaChange(event){
        setTextAreaContent(event.target.value)
    }

    // ---New DDM---
    //DDM is short for drop-down menu
    function showFileDDM(){
        setFileDDM(!fileDDM)
        console.log(fileDDM)
    }

    function file_new(){
        setTextAreaContent("")
        setFileDDM(false)
    }
    
    return (
        <div className={"program_notepad"}>
            <div className={"menubar"}>
                {/*https://www.w3schools.com/howto/howto_js_dropdown.asp*/}

                <div className="dropdown">
                    <button className="dropbtn" onClick={showFileDDM}>File</button>
                    <div id="myDropdown" className={fileDDM ? 'dropdown-content visible' : 'dropdown-content '}>
                        <a onClick={file_new}>New</a>
                        <a href="#">Open</a>
                        <a href="#">Save</a>
                        <a href="#">Save As</a>
                    </div>
                </div>

                <button>Edit</button>
                <button>Format</button>
                <button>Help</button>
            </div>
            <textarea onChange={handleTextAreaChange} value={textAreaContent} name="notepad"></textarea>
        </div>
    );

}

export default Notepad;