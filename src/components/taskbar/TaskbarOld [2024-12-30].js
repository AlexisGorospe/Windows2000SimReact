import React, {Component} from "react";
import StartMenu from "../start_menu/StartMenu";
import '../start_menu/style.css';

class Taskbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            startMenuOpen: false
        };

        this.startClick = this.startClick.bind(this);
    }

    startClick = async () => {
        this.setState((prevState) => ({
            startMenuOpen: !prevState.startMenuOpen
        }),() => {
            console.log("Start Button Has Been Clicked: ", this.state.startMenuOpen);
        });
    }

    closeStartMenu = () => {
        this.setState({startMenuOpen: false});
    };

    render() {
        return (
            <div id={"taskbar"}>
                <div id={"taskbar_left_side"}>
                    <button id={"startButton"} onClick={this.startClick}/>
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

                <StartMenu visible={this.state.startMenuOpen} sendDataToParent={this.closeStartMenu} />
            </div>
        );
    }
}

export default Taskbar;