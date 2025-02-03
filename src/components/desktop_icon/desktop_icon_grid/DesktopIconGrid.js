import { React, Component } from "react";

import DesktopIcon from "../desktop_icon/DesktopIcon";
import "../desktop_icon/desktop_icon_style.css";

class DesktopIconGrid extends Component {
    constructor(props) {
        super(props);

        this.state = {
            programs: props.programs
        }
    }


    componentDidMount() {
        console.log(this.state.programs[0][0])

        let desktop_icon_grid = document.getElementById("desktop_icon_grid");
        for (let i = 0; i < this.state.programs.length; i++) {
            let icon =
            <DesktopIcon
                className={this.state.programs[i][0]}
                name={this.state.programs[i][1]}
            />

            desktop_icon_grid.insertAdjacentHTML("beforeend", icon)
        }
    }

    render() {
        console.log(this.state.programs);

        return(
            <div id={"desktop_icon_grid"}>
                <DesktopIcon
                    className={"internet_explorer"}
                    name={"Internet Explorer"}
                />
                <DesktopIcon
                    className={"recycle_bin"}
                    name={"Recycle Bin"}
                />
            </div>
        )
    }
}

export default DesktopIconGrid;