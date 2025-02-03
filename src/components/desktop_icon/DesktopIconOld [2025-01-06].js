import React, {Component} from "react";

class DesktopIcon extends Component {
    constructor(props) {
        super(props);

        this.state = {
            className: props.className,
            name: props.name,
        };
    }

    doubleClickDesktopIcon = () => {
        console.log("You have double clicked: " + this.state.name);
    }

    render() {
        return(
            <button className={"desktop_icon"} onDoubleClick={this.doubleClickDesktopIcon}>
                <div className={this.state.className}/>
                <p>{this.props.name}</p>
            </button>
        )
    }
}

export default DesktopIcon;