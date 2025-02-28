import React, {useState} from "react";
import Window from "../../windows/Window.js";
import about from "../about/About";
import "./style.css"

//import the fonts later

function Notepad(props) {
    // file
    const [fileDDM, setFileDDM] = useState(false)
    const [editDDM, setEditDDM] = useState(false)
    const [viewDDM, setViewDDM] = useState(false)
    const [helpDDM, setHelpDDM] = useState(false)

    const [textAreaContent, setTextAreaContent] =  useState("")
    const [wordWrap, setWordWrap] = useState(false)

    const [windows , setWindows] = useState([]);

    function handleTextAreaChange(event){
        setTextAreaContent(event.target.value)
    }

    function closeDDMs(){
        setFileDDM(false)
        setEditDDM(false)
        setViewDDM(false)
        setHelpDDM(false)
    }

    // ---New DDM---
    //DDM is short for drop-down menu
    function showFileDDM(){
        closeDDMs()
        setFileDDM(!fileDDM)
        console.log(fileDDM)
    }

    function file_new(){
        closeDDMs()
        setTextAreaContent("")
    }

    function file_open(){
        closeDDMs()
        console.log("this function is supposed to ask the user for a text file they wanna open in this notepad sim")
        
        
        // let popupWindow = window.open('url','windowName','options') //keeping this comment here because i think it's cool
    }

    function file_save(){
        closeDDMs()
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

    // --edit--
    function showEditDDM(){
        closeDDMs()
        setEditDDM(!editDDM)
    }

    function edit_timeDate(){
        closeDDMs()
        let date_rn = new Date();

        //fix the formatting (or not)
        setTextAreaContent(textAreaContent + date_rn)
    }


    // --view--
    function showViewDDM(){
        closeDDMs()
        setViewDDM(!viewDDM)
        console.log(viewDDM)
    }

    function view_word_wrap(){
        closeDDMs()
        setWordWrap(!wordWrap)
    }

    // --help--

    function showHelpDDM(){
        closeDDMs()
        setHelpDDM(!helpDDM)
        console.log(viewDDM)
    }

    const help_about = () => {
        closeDDMs()
        setWindows((prevWindows) => [
            ...prevWindows,
            <Window key={prevWindows.length} titlebar={"About"} program={3} max_height={419} max_width={329} about_icon={2} about_program_name={"Notepad"}/>
        ]);
    }
    // Window
    const createNewWindow = (titlebar = "Untitled - Notepad", program = 2) => {
        console.log(titlebar)
        console.log(program)

        setWindows((prevWindows) => [
            ...prevWindows,
            <Window key={prevWindows.length} titlebar={titlebar} program={program.toString()}/>
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

                <div className="dropdown">
                    <button className="dropbtn" onClick={showEditDDM}>Edit</button>
                    <div id="myDropdown"className={editDDM ? 'dropdown-content visible' : 'dropdown-content '}>
                        <a onClick={edit_timeDate}>Time/Date</a>
                    </div>
                </div>


                <div className="dropdown">
                    <button className="dropbtn" onClick={showViewDDM}>View</button>
                    <div id="myDropdown" className={viewDDM ? 'dropdown-content visible' : 'dropdown-content '}>
                        <a onClick={view_word_wrap}>Word Wrap</a>
                        <a onClick={"#"}>Font</a>
                    </div>
                </div>

                <div className="dropdown">
                    <button className="dropbtn" onClick={showHelpDDM}>Help</button>
                    <div id="myDropdown" className={helpDDM ? 'dropdown-content visible' : 'dropdown-content '}>
                        <a onClick={view_word_wrap}>Help Topics</a>
                        <a onClick={help_about}>About Notepad</a>
                    </div>
                </div>
            </div>
            <textarea onChange={handleTextAreaChange} value={textAreaContent} name="notepad"
                      className={wordWrap ? '' : 'noWordWrap'}></textarea>
        </div>
    );

}

export default Notepad;