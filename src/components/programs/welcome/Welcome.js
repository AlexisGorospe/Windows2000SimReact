import React from "react"
import "./style.css"

import banner from "./img/banner.png"

import getting_started from "./img/getting_started.png"
import connect_to_the_internet from "./img/connect_to_the_internet.png"
import discover_windows_2000 from "./img/discover_windows_2000.png"
import register_windows_2000 from "./img/register_windows_2000.png"

import exit_button from "./img/exit_button.png"

function Welcome(props) {

    const images = [getting_started, register_windows_2000, discover_windows_2000, connect_to_the_internet]
    const [currentImage, setCurrentImage] = React.useState(images[0]);

    function changeImage(imageID){
        setCurrentImage(images[imageID])
    }

    const exitClicked=()=>{
        props.keepProgramOpen(false)
    }

    return(
        <div className={"welcome"}>
            <img src={banner} alt="banner" className={"banner"}/>
            <div className={"content"}>
                <aside>
                    <p onMouseOver={() => {changeImage(1)}}>Register Now</p>
                    <p onMouseOver={() => {changeImage(2)}}>Discover Windows</p>
                    <p onMouseOver={() => {changeImage(3)}}>Connect to the Internet</p>
                </aside>
                <img className={"current"} src={currentImage}/>
            </div>

            <button className={"exit_button"} onClick={exitClicked} src={exit_button}/>
        </div>
    )

    // make the stuff that appears when you click it later
}

export default Welcome;