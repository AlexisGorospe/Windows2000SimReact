import React, {Component} from "react";

class Taskbar extends Component{
    constructor(props) {
        super(props);

        this.startClick = this.startClick.bind(this);

        this.state = {
            startActive: false,
            quickStartPrograms: ["internet_explorer"],
            buttonTexture: ""
        }
    }

    startClick = () => {
        this.startActive = !this.startActive;
        console.log(this.startActive);

        document.getElementById("startButton").classList.toggle("pressed");
        document.getElementById("start_menu").classList.toggle("visible");
        //this.state.buttonTexture = "pressed"
    }

    render(){
        return(
            <div id={"taskbar"}>

                <div id={"taskbar_left_side"}>
                    <div id={"startButton"} className={this.state.buttonTexture} onClick={this.startClick}>
                        {!!this.state.startActive}

                    </div>

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

                        <div className={"quickLaunchProgram"} onClick={this.test}>
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
        )
    }
}

export default Taskbar

