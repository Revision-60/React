import { Paper } from "@mui/material";
import { Component } from "react";
import LightbulbCircleIcon from "@mui/icons-material/LightbulbCircle";
import LightModeIcon from "@mui/icons-material/LightMode";

type Light1Props = {};
type Light1State = {
  isOn: boolean;
  buttonStyle: string;
};

const buttonOffStyle: string = "bg-slate-500 py-3 px-5 rounded-full text-3xl";
const buttonOnStyle: string = "bg-green-500 py-3 px-5 rounded-full text-3xl";

export default class Light1 extends Component<Light1Props, Light1State> {
  constructor(props: Light1Props) {
    super(props);
    this.state = {
      isOn: false,
      buttonStyle: buttonOffStyle,
    };
  }

  handleButtonEvent = () => {
    this.setState({
      ...this.state,
      isOn: !this.state.isOn,
      buttonStyle: this.state.isOn ? buttonOffStyle : buttonOnStyle,
    });
  };

  render() {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-slate-900">
        <Paper
          elevation={3}
          className="w-1/3 h-1/2 !bg-slate-900 flex flex-col justify-between items-center p-10"
        >
          {this.state.isOn ? (
            <LightModeIcon className="!text-white !text-9xl" />
          ) : (
            <LightbulbCircleIcon className="!text-slate-500 !text-9xl" />
          )}

          <button
            className={this.state.buttonStyle}
            onClick={this.handleButtonEvent}
          >
            {this.state.isOn ? "ON" : "OFF"}
          </button>
        </Paper>
      </div>
    );
  }
}
