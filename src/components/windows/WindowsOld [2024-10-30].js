import React, {Component} from "react";

class Windows extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titlebar: props.titlebar,
            icon_class: props.icon_class
        }

        this.close = this.close.bind(this);
    }

    close = () => {
        console.log("this window is supposed to delete itself");
        console.log(this.state.icon_class);
    }

    render(){
        return(
            <div className={"window"}>
                <div className={"titlebar"}>
                    <div className={"titlebar_left"}>
                        <div className={this.state.icon_class}/>
                        {/*ie is here for testing purposes, also this is an icon*/}
                        <p>{`${this.state.titlebar}`}</p>
                    </div>
                    <div className={"buttons"}>
                        <button className={"window_button_minimize"}></button>
                        <button className={"window_button_maximize"}></button>
                        <button className={"window_button_close"} onClick={this.close}></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Windows;