import React from "react"
import "./style.css"

import banner from "./img/banner.png"

import getting_started from "./img/getting_started.png"
import connect_to_the_internet from "./img/connect_to_the_internet.png"
import discover_windows_2000 from "./img/discover_windows_2000.png"
import register_windows_2000 from "./img/register_windows_2000.png"

function Welcome() {

    const [currentImage, setCurrentImage] = React.useState(getting_started);

    return(
        <div className={"welcome"}>
            <img src={banner} alt="banner" className={"banner"}/>
            <div className={"content"}>
                <aside>
                    <p>Register Now</p>
                    <p>Discover Windows</p>
                    <p>Connect to the Internet</p>
                </aside>
                <img className={"current"} src={currentImage}/>
            </div>
        </div>
    )
}

export default Welcome;