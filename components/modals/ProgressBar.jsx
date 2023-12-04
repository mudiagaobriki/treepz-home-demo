import React, { useState, useEffect } from "react";
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function ProgressBar({minutes, seconds, color, background=true}) {
    const [min, setMin] = useState(minutes);
    const [sec, setSec] = useState(seconds);
    const [progress, setProgress] = useState(0);
    const [start, setStart] = useState(true);
    const [count, setCount] = useState(0);
    const amount = ((minutes * 60) + seconds) / 60; console.log(amount);

    const colours = {
        green: {color: "#3CC13B", background: "#E0F5E0", text: "text-[#3CC13B]"},
        yellow: {color: "#F3BB1C", background: "#FDF3D8", text: "text-[#F3BB1C]"},
        red: {color: "#B00020", background: "#FEECEC", text: "text-[#B00020]"},
    };

    useEffect(() => {
        let x = sec, y = min;
        setProgress((count / 60) / amount);
        const interval = setInterval(() => {
            if ((x === 0 && y === 0) || start === false) {
                setStart(false);
                return;
            }
            setCount((count) => count + 1);
            if (x < 1) {
                setSec(59);
                setMin(y - 1);
            } else if (x < 60) {
                --x;
                setSec(x);
            }
                setProgress((count / 60) / amount);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
      }, [min, sec, start, progress]);

    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <CircularProgressbarWithChildren
                    className="w-52 h-52"
                    background={background}
                    strokeWidth={5}
                    value={progress}
                    maxValue={1}
                    styles={buildStyles({
                        pathTransitionDuration: 0.2,
                        trailColor: colours[color].background,
                        pathColor: colours[color].color,
                        backgroundColor: colours[color].background,
                    })}
                >
                    <div className="inline-flex flex-col items-center">
                        <p className="text-center font-medium tz-text-dark-1">Time left</p>
                        <h4 className={`text-center text-4xl font-medium ${colours[color].text}`}>
                            {(min < 10 ? `0${min}` : min) + ":" + (sec < 10 ? `0${sec}` : sec)}
                        </h4>
                    </div>
                </CircularProgressbarWithChildren>
            </div>
        </>
    );
}
