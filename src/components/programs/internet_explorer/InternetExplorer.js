import React, { useState } from "react"
import "./style.css"

function InternetExplorer(){

    const [currentUrl, setCurrentUrl] = useState("https://metasearx.com/?q=among%20us&categories=general&language=en-US/..")
    const [searchBarContent, setSearchBarContent] = useState("https://metasearx.com") 
    const [test, setTest] = useState(false);

    const search = (event) => {
        event.preventDefault();
        console.log(searchBarContent[0,3])
        
        let regex = /^(http:|https:)/;

        if(regex.test(searchBarContent)){
            setCurrentUrl(searchBarContent)
        }
        else if(searchBarContent.length == 0){
            setCurrentUrl(`https://metasearx.com/?q=nothing&categories=general&language=en-US`)
        }
        else{
            setCurrentUrl(`https://metasearx.com/?q=${searchBarContent}&categories=general&language=en-US`)
        }




        // focus on making it look nice later
    }

    const updateUrlOnSearchBar = (event) => {
        const iframe = document.getElementById("myIframe")
        setCurrentUrl(iframe.contentWindow.location.href)
    }

    const refresh = () => {
        setCurrentUrl(`about:blank`)
        setCurrentUrl(currentUrl)
        console.log("refresjhned")
    }


    return (
        <div className={"internet_explorer"}>
            <header>
                <form onSubmit={search}>
                    <input type="text" 
                    value={searchBarContent}
                    onChange={(e) => setSearchBarContent(e.target.value)}
                    ></input>
                    <button type="submit">go</button>
                </form>
                <button onClick={refresh}>refresh</button>
                {/* <p>{currentUrl}</p>
                <p>{test}</p> */}
            </header>
            <iframe id={"myIframe"} src={currentUrl} onChange={updateUrlOnSearchBar}/>
        </div>


    )
}

/*
list of search engines that work

*/

export default InternetExplorer;