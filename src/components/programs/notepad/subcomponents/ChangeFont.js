import React, {useState} from "react";

function ChangeFont(props){
    const fontList = [
        "calibri",
        "comic_sans_ms",
        "fixedsys",
        "papyrus",
        "tahoma",
        "times_new_roman"
    ]

    const [fontSelected, setFontSelected] = useState("calibri")

    

    return(
        <div>
            <ul>
                {fontList.map(font => <p>{font}</p>)}
            </ul>
        </div>
    )
}


export default ChangeFont;