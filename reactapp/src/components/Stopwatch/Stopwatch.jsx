import React, { useState, useEffect } from "react";

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    const handleToggle = () => {
        setIsRunning(!isRunning);
    };

    const handleReset = () => {
        setIsRunning(false);
        setTime(0);
    };

    return (
        <div className="watchContainer">
            <h1> React Stopwatch </h1>
            <p id="time" data-testid="time">{new Date(time * 1000).toISOString().substr(11, 8)}</p>
            <div className="buttonContainer">
                <button
                    id="toggle"
                    data-testid="toggle"
                    onClick={handleToggle}
                >
                    {isRunning ? "Pause" : "Start/Resume"}
                </button>
                <button
                    id="reset"
                    data-testid="reset"
                    onClick={handleReset}
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Stopwatch;



