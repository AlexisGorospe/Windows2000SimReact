import React from "react";

const Taskbar = ({setStartVisibility, startVisibility}) => {
    // const startButtonPressedRef = useRef(false);

    var startButton = document.getElementById("startButton"); //find out why this is null
    startButton.addEventListener("click", () => setStartMenuVisibilityStatus());


    const setStartMenuVisibilityStatus = (forceStatus) => {
        if (forceStatus === undefined) {
            setStartVisibility(prevState => !prevState);
            // startButtonPressedRef.current = !startButtonPressedRef.current;
            document.getElementById("startButton").classList.toggle("pressed");
        }
        else {
            setStartVisibility(forceStatus);
            // startButtonPressedRef.current = forceStatus;
            console.log("Start Menu visibility has been forced to: " + forceStatus);
            document.getElementById("startButton").classList.toggle("pressed");
        }
    }



    return(
        <div id={"taskbar"}>
            <div id={"taskbar_left_side"}>
                <div id={"startButton"}/>
                <div className={"taskbar_separator"}></div>
                <div id={"quickLaunch"}>
                    {/*
                        {
                            this.state.quickStartPrograms.map((program) => {
                                return (
                                    <div className={"quickStartProgram"} >

                                    </div>
                                )
                            })
                        }
                        */}

                    <div className={"quickLaunchProgram"}>
                    </div>
                </div>
                <div className={"taskbar_separator"}></div>
                <div id={"runningPrograms"}>

                </div>
            </div>
            <div id={"notificationArea"}>
                <div id={"notificationIcons"}>

                </div>
                <p id={"start_clock"}>4:20 PM</p>
            </div>
        </div>
    );
}

export default Taskbar;