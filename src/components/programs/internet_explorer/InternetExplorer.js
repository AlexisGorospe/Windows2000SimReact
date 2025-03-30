import React, { useState } from "react"
import "./style.css"

function InternetExplorer(){

    const [currentUrl, setCurrentUrl] = useState("https://www.mojeek.com/")
    const [searchBarContent, setSearchBarContent] = useState("") 

    const search = (event) => {
        event.preventDefault();

        setCurrentUrl("https://www.bing.com/search?q=hello there")
    }


    return (
        <div className={"internet_explorer"}>
            <header>
                <form onSubmit={search}>
                    <input type="text" value={searchBarContent}></input>
                    <button type="submit" value={"replace this text later"}></button>
                </form>
            </header>
            <iframe src={currentUrl}/>
        </div>


    )
}

/*
list of search engines that work

*/

export default InternetExplorer;