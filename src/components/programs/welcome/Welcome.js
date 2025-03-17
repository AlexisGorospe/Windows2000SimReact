import React from "react"
import "./style.css"

import banner from "./img/banner.png"

function Welcome() {


    return(
        <div className={"welcome"}>
            <img src={banner} alt="banner" />
        </div>
    )
}

export default Welcome;