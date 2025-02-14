import React, {useState} from "react";
import Window from "../../windows/Window.js";

function Notepad(props) {
    // file
    const [fileDDM, setFileDDM] = useState(false)
    const [viewDDM, setViewDDM] = useState(false)
    const [textAreaContent, setTextAreaContent] =  useState("")
    const [wordWrap, setWordWrap] = useState(false)

    const [windows , setWindows] = useState([]);

    function handleTextAreaChange(event){
        setTextAreaContent(event.target.value)
    }

    // ---New DDM---
    //DDM is short for drop-down menu
    function showFileDDM(){
        setViewDDM(false)
        setFileDDM(!fileDDM)
        console.log(fileDDM)
    }

    function file_new(){
        setFileDDM(false)
        setTextAreaContent("")
        setFileDDM(false)
    }

    function file_open(){
        setFileDDM(false)
        console.log("this function is supposed to ask the user for a text file they wanna open in this notepad sim")
        
        
        // let popupWindow = window.open('url','windowName','options') //keeping this comment here because i think it's cool
    }

    function file_save(){        
        setFileDDM(false)
        const blob = new Blob([textAreaContent], {type: "text/plain"})
        const url = URL.createObjectURL(blob)
        const link = document.createElement("a")
        link.href = url
        link.download = "Untitled.txt"
        document.body.appendChild(link)
        link.click()

        document.body.removeChild(link)
        URL.revokeObjectURL(url)

        // THANK YOU https://www.youtube.com/watch?v=Wn8gR3CSuEc
    }


    // --view--
    function showViewDDM(){
        setFileDDM(false)
        setViewDDM(!viewDDM)
        console.log(viewDDM)
    }

    function view_word_wrap(){
        setViewDDM(false)
        setWordWrap(!wordWrap)
    }

    // Window
    const createNewWindow = (titlebar = "Untitled - Notepad", program = 2) => {
        console.log(titlebar)
        console.log(program)

        setWindows((prevWindows) => [
            ...prevWindows,
            <Window key={prevWindows.length} titlebar={titlebar}program={program.toString()}/>
        ]);
        console.log(titlebar + program);
    }
    
    return (
        <div className={"program_notepad"}>
            <div className={"windows"}>
                {windows.map(window => window)}
            </div>

            <div className={"menubar"}>
                {/*https://www.w3schools.com/howto/howto_js_dropdown.asp*/}

                <div className="dropdown">
                    <button className="dropbtn" onClick={showFileDDM}>File</button>
                    <div id="myDropdown" className={fileDDM ? 'dropdown-content visible' : 'dropdown-content '}>
                        <a onClick={file_new}>New</a>
                        <a onClick={file_open}>Open</a>
                        <a onClick={file_save}>Save</a>
                        <a onClick={createNewWindow}>Save As</a>
                    </div>
                </div>


                <button>Edit</button>
                <div className="dropdown">
                    <button className="dropbtn" onClick={showViewDDM}>View</button>
                    <div id="myDropdown" className={viewDDM ? 'dropdown-content visible' : 'dropdown-content '}>
                        <a onClick={view_word_wrap}>Word Wrap</a>
                        <a onClick={"#"}>Font</a>
                    </div>
                </div>
                <button>Help</button>
            </div>
            <textarea onChange={handleTextAreaChange} value={textAreaContent} name="notepad" className={wordWrap ? '' : 'noWordWrap'}></textarea>
        </div>
    );

}

export default Notepad;