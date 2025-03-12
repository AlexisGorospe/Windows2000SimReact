import React, {useEffect, useRef, useState} from "react";
import "./style.css"
import WhiteScreen from "./white_screen.png"

import ico_button_select_free from "./img/icons/buttons/select_free.png"
import ico_button_select_rect from "./img/icons/buttons/select_rect.png"
import ico_button_eraser from "./img/icons/buttons/eraser.png"
import ico_button_fill_bucket from "./img/icons/buttons/fill_bucket.png"
import ico_button_eyedropper from "./img/icons/buttons/eyedropper.png"
import ico_button_magnifying_glass from "./img/icons/buttons/magnifying_glass.png"
import ico_button_pencil from "./img/icons/buttons/pencil.png"
import ico_button_paintbrush from "./img/icons/buttons/paintbrush.png"
import ico_button_spray_tool from "./img/icons/buttons/spray_tool.png"
import ico_button_text from "./img/icons/buttons/text.png"
import ico_button_line_straight from "./img/icons/buttons/line_straight.png"
import ico_button_line_free from "./img/icons/buttons/line_free.png"
import ico_button_shape_free from "./img/icons/buttons/shape_free.png"
import ico_button_shape_rect from "./img/icons/buttons/shape_rect.png"
import ico_button_shape_circle from "./img/icons/buttons/shape_circle.png"
import ico_button_shape_rect_round from "./img/icons/buttons/shape_rect_round.png"



function Mspaint(props) {
    // the same thing you see in notepad lol
    const [fileDDM, setFileDDM] = useState(false)
    const [editDDM, setEditDDM] = useState(false)
    const [viewDDM, setViewDDM] = useState(false)
    const [helpDDM, setHelpDDM] = useState(false)
    const [wordWrap, setWordWrap] = useState(false)
    const [windows, setWindows] = useState([]);

    const [img, setImg] = useState(props.img ? props.img : WhiteScreen)

    // stuff from https://medium.com/@subhadipjana866/drawing-on-an-image-in-a-react-canvas-9cc47d38e183
    const canvasRef = useRef(null);
    const [ctx, setCtx] = useState(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [points, setPoints] = useState([]);
    const [allStrokes, setAllStrokes] = useState([]);
    const [currentPoints, setCurrentPoints] = useState([]);
    const lastPosRef = useRef({ x: 0, y: 0 });
    const [penColor, setPenColor] = useState("blue");
    const [penWidth, setPenWidth] = useState(5);
    const [originalImageData, setOriginalImageData] = useState(null);

    const [defaultColors, setDefaultColors] = useState([
        "#000000",
        "#808080",
        "#800000",
        "#808000",
        "#008000",
        "#008080",
        "#000080",
        "#800080",
        "#808040",
        "#004040",
        "#0080ff",
        "#004080",
        "#4000ff",
        "#804000",
        "#FFFFFF",
        "#c0c0c0",
        "#ff0000",
        "#ffff00",
        "#00ff00",
        "#00ffff",
        "#0000ff",
        "#ff00ff",
        "#ffff80",
        "#00ff80",
        "#80ffff",
        "#8080ff",
        "#ff0080",
        "#ff8040"
    ]);

    console.log(defaultColors.length)

    // --file drop down menu---
    function closeDDMs(){
        setFileDDM(false)
        setEditDDM(false)
        setViewDDM(false)
        setHelpDDM(false)
    }

    function showFileDDM(){
        closeDDMs()
        setFileDDM(!fileDDM)
        console.log(fileDDM)
    }

    function file_new(){
        closeDDMs()
        // setTextAreaContent("")
    }

    function file_open(){
        closeDDMs()
        console.log("this function is supposed to ask the user for a text file they wanna open in this notepad sim")


        // let popupWindow = window.open('url','windowName','options') //keeping this comment here because i think it's cool
    }

    function file_save(){
        // make it so that it saves the image to your computer
        /*
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

        */
        // THANK YOU https://www.youtube.com/watch?v=Wn8gR3CSuEc
    }

    // stuff from https://medium.com/@subhadipjana866/drawing-on-an-image-in-a-react-canvas-9cc47d38e183
     const loadImageCanvas = (path) => {
            const canvas = canvasRef.current;
            const context = canvas.getContext("2d");
            setCtx(context);
            
            const image = new Image();
            image.crossOrigin = "anonymous";
            image.src = path;
    
            image.onload = () => {
                canvas.width = image.width;
                canvas.height = image.height;
                context.drawImage(image, 0, 0);
                const baseImageData = canvas.toDataURL("image/png");
                setOriginalImageData(baseImageData);
            };
        };
    
        const getCanvasCoords = (e) => {
            let clientX, clientY;
            if (e.touches && e.touches.length > 0) {
                clientX = e.touches[0].clientX;
                clientY = e.touches[0].clientY;
            } else {
                clientX = e.clientX;
                clientY = e.clientY;
            }
            const canvas = canvasRef.current;
            const rect = canvas.getBoundingClientRect();
            const scaleX = canvas.width / rect.width;
            const scaleY = canvas.height / rect.height;
    
            return {
                x: (clientX - rect.left) * scaleX,
                y: (clientY - rect.top) * scaleY,
            };
        };
    
        const handlePointerDown = (e) => {
            e.preventDefault();
            if (!ctx) return;
            setIsDrawing(true);
            const { x, y } = getCanvasCoords(e);
            lastPosRef.current = { x, y };
        };
    
        const handlePointerMove = (e) => {
            e.preventDefault();
            if (!ctx || !isDrawing) return;
            
            const { x, y } = getCanvasCoords(e);
            setCurrentPoints((prev) => [...prev, { x, y }]);
    
            const prevPoints = currentPoints;
            if (prevPoints.length < 1) return;
    
            const last = prevPoints[prevPoints.length - 1];
    
            ctx.beginPath();
            ctx.moveTo(last.x, last.y);
            ctx.lineTo(x, y);
            ctx.strokeStyle = penColor;
            ctx.lineWidth = penWidth;
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            ctx.globalCompositeOperation = "source-over";
            ctx.stroke();
        };
    
        const handlePointerUp = (e) => {
            e.preventDefault();
            setIsDrawing(false);
            setAllStrokes((prev) => [...prev, currentPoints]);
            setCurrentPoints([]);
        };
    
        useEffect(() => {
            if (img) {
                loadImageCanvas(img);
            }
        }, [img]);




    const buttons = [ //i don't know why it doesn't work for objects
        {
            icon: ico_button_select_free,
            funct: blank,
        },
        {
            icon: ico_button_select_rect,
            funct: blank
        },
        {
            icon: ico_button_eraser,
            funct: blank,
        },
        {
            icon: ico_button_fill_bucket,
            funct: blank
        },
        {
            icon: ico_button_eyedropper,
            funct: blank,
        },
        {
            icon: ico_button_magnifying_glass,
            funct: blank
        },
        {
            icon: ico_button_pencil,
            funct: blank,
        },
        {
            icon: ico_button_paintbrush,
            funct: blank
        },
        {
            icon: ico_button_spray_tool,
            funct: blank
        },
        {
            icon: ico_button_text,
            funct: blank,
        },
        {
            icon: ico_button_line_straight,
            funct: blank
        },
        {
            icon: ico_button_line_free,
            funct: blank,
        },
        {
            icon: ico_button_shape_free,
            funct: blank
        },
        {
            icon: ico_button_shape_rect,
            funct: blank,
        },
        {
            icon: ico_button_shape_circle,
            funct: blank
        },
        {
            icon: ico_button_shape_rect_round,
            funct: blank
        }
    ]

    function blank(){
        // exists fro error prevention
    }

    return (
        <div className={"program_mspaint"}>
            <div className={"menubar"}>
                {/*https://www.w3schools.com/howto/howto_js_dropdown.asp*/}

                <div className="dropdown">
                    <button className="dropbtn" onClick={showFileDDM}>File</button>
                    <div id="myDropdown" className={fileDDM ? 'dropdown-content visible' : 'dropdown-content '}>
                        <a onClick={"#"}>New</a>
                        <a onClick={"#"}>Open</a>
                        <a onClick={"#"}>Save</a>
                        <a onClick={"#"}>Save As</a>
                    </div>
                </div>

            </div>
            <main>
                <aside>
                    <div className={"buttons"}>
                        {buttons.map((button) => (
                            <button onClick={button.funct} key={button.name}>
                                <img src={button.icon}/>
                            </button>
                        ))}
                    </div>
                </aside>

                <canvas
                    ref={canvasRef}
                    style={{
                        border: "1px solid black",
                        cursor: "crosshair",
                        width: "500px",
                        height: "500px",
                        touchAction: "none",
                    }}
                    onMouseDown={handlePointerDown}
                    onMouseMove={handlePointerMove}
                    onMouseUp={handlePointerUp}
                    onTouchStart={handlePointerDown}
                    onTouchMove={handlePointerMove}
                    onTouchEnd={handlePointerUp}
                />
            </main>

            <footer>
                <div className={"selected_colours"}>
                    <div className={"primary"}></div>
                    <div className={"secondary"}></div>
                </div>

                <div className={"colours"}> {/*this will be a grid that has all the colours*/}
                    {defaultColors.map((col) => (
                        <button style={{backgroundColor: `${col}`}}>{col}</button>
                    ))}
                </div>
            </footer>
        </div>
);


}

export default Mspaint;