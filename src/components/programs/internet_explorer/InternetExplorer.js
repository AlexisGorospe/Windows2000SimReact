import React, { useState } from "react"
import "./style.css"

function InternetExplorer(){

    const [currentUrl, setCurrentUrl] = useState("https://www.bing.com/search?q=hello there")
    const [searchBarContent, setSearchBarContent] = useState("") 
    const [test, setTest] = useState(false);

    const search = (event) => {
        event.preventDefault();
        console.log(searchBarContent[0,3])
        
        let regex = /^(http:|https:)/;

        if(regex.test(searchBarContent)){
            setCurrentUrl(searchBarContent)
        }
        else{
            setCurrentUrl(`https://www.bing.com/search?q=${searchBarContent}`)
        }




        // focus on making it look nice later
        // also make sure to replace bing with another search engine that runs in iframes
    }


    return (
        <div className={"internet_explorer"}>
            <header>
                <form onSubmit={search}>
                    <input type="text" 
                    value={searchBarContent}
                    onChange={(e) => setSearchBarContent(e.target.value)}
                    ></input>
                    <button type="submit" value={"replace this text later"}>replace this text later</button>
                </form>
                <p>{currentUrl}</p>
                <p>{test}</p>
            </header>
            <iframe src={currentUrl}/>
        </div>


    )
}

/*
list of search engines that work

*/

export default InternetExplorer;