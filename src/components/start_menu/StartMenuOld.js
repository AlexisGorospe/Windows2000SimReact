import React, {Component} from "react";

class StartMenu extends Component {
    constructor(props) {
        super(props);

        //this.toggleStartMenuVisibility = this.toggleStartMenuVisibility.bind(this);

        this.state = {
            visible: false
        };
    }

    programClicked = () => {
        //document.getElementById("startButton").classList.toggle("pressed", false);
        //document.getElementById("start_menu").classList.toggle("visible", false);
        console.log(this.programClicked);
        console.log("b")
    }

    render(){
        return (


            <div id={"start_menu"}>
                <div id={"start_logo_banner"}/>
                <div id={"start_menu_programs"}>
                    <div className={"start_program_list"}>
                        <div className={"start_program"} onClick={this.programClicked}>
                            <div className={"start_program_icon internet_explorer"}/>
                            <p className={"start_program_name"}>Internet Explorer</p>
                        </div>
                    </div>
                    <div className={"start_menu_separator"}></div>
                </div>
            </div>

        )
    }
}

export default StartMenu;


/*
            <div id={"start_menu"}>
                <div id={"start_logo_banner"}/>
                <div id={"start_menu_programs"}>
                    <div className={"start_program_list"}>
                        <div className={"start_program"} onClick={this.programClicked}>
                            <div className={"start_program_icon internet_explorer"}/>
                            <p className={"start_program_name"}>Internet Explorer</p>
                        </div>
                    </div>
                    <div className={"start_menu_separator"}></div>
                </div>
            </div>
*/