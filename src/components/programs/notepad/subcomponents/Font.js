import React, {useState} from "react";

// import font_arial from "../assets/fonts/arial"


function Font(props){
    const fontList = [
        {
            "name": "Arial",
            "className": "font_arial"
            
        },
        {
            "name": "Calibri",
            "className": "font_calibri"
        },
        {
            "name": "Comic Sans MS",
            "className": "font_comic_sans_ms"
        },
        {
            "name": "FixedSys",
            "className": "font_fixedsys"
        },
        {
            "name": "Papytus",
            "className": "font_papyrus"
        },
        {
            "name": "Tahoma",
            "className": "font_tahoma"
        },
        {
            "name": "Times New Roman",
            "className": "font_times_new_roman"
        },
    ]

    const [fontSelected, setFontSelected] = useState("font_calibri")

    const changeFont = (font) => {
        setFontSelected(font)
    }

    const submit = () => {
        
    }
    

    return(
        <div>
            <p>font selected {fontSelected}</p>
            <ul>
                {fontList.map(font => 
                    <li key={font.id} onClick={() => {changeFont(font.className)}}>
                        <p>{font.name}</p>
                    </li>
                )}
            </ul>
            <label>there is the </label>
           <input type="number"/>

           <button>OK</button>
        </div>
    )
}


export default Font;