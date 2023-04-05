import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import LightbulbCircleIcon from "@mui/icons-material/LightbulbCircle";
import LightModeIcon from "@mui/icons-material/LightMode";

const Light2 = () => {
  const buttonOffStyle: string = "bg-slate-500 py-3 px-5 rounded-full text-3xl";
  const buttonOnStyle: string = "bg-green-500 py-3 px-5 rounded-full text-3xl";

  const [isOn, setIsOn] = useState<boolean>(false);
  const [buttonStyle, setButtonStyle] = useState<string>(buttonOffStyle);

  alert("Constructor"); // Initialize

  useEffect(() => {
    alert("Clicked..!"); // Mount
    return () => {
      alert("Unmounted..!"); // Unmount
    };
  });

  return (
    <div className="w-full h-screen flex justify-center items-center bg-slate-900">
      <Paper
        elevation={3}
        className="w-1/3 h-1/2 !bg-slate-900 flex flex-col justify-between items-center p-10"
      >
        {isOn ? (
          <LightModeIcon className="!text-white !text-9xl" />
        ) : (
          <LightbulbCircleIcon className="!text-slate-500 !text-9xl" />
        )}

        <button
          className={buttonStyle}
          onClick={() => {
            setIsOn(!isOn);
            setButtonStyle(!isOn ? buttonOnStyle : buttonOffStyle);
            // alert("Clicked..!");
          }}
        >
          {isOn ? "ON" : "OFF"}
        </button>
      </Paper>
    </div>
  );
};

export default Light2;
