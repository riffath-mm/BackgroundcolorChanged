import React, { useState } from "react";
import "./App.css";

function App() {
    const [backgroundColor, setBackgroundColor] = useState("olive");

    const changeColor = (newColor) => {
        setBackgroundColor(newColor);
    };

    return (
        <div
            style={{
                backgroundColor,
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <button
                style={{
                    marginRight: "10px",
                    backgroundColor: "white",
                    color: "red",
                    borderRadius: "10px",
                    padding: "6px",
                }}
                onClick={() => changeColor("red")}
            >
                Change to Red
            </button>
            <button
                style={{
                    marginRight: "10px",
                    color: "Blue",
                    backgroundColor: "white",

                    borderRadius: "10px",
                    padding: "6px",
                }}
                onClick={() => changeColor("blue")}
            >
                Change to Blue
            </button>
            <button
                style={{
                    marginRight: "10px",
                    backgroundColor: "white",
                    color: "Green",
                    borderRadius: "10px",
                    padding: "6px",
                }}
                onClick={() => changeColor("green")}
            >
                Change to Green
            </button>
            <button
                style={{
                    marginRight: "10px",
                    color: "black",
                    backgroundColor: "white",

                    borderRadius: "10px",
                    padding: "6px",
                }}
                onClick={() => changeColor("white")}
            >
                Change to white
            </button>
            <button
                style={{
                    marginRight: "10px",
                    color: "Pink",
                    backgroundColor: "white",

                    borderRadius: "10px",
                    padding: "6px",
                }}
                onClick={() => changeColor("pink")}
            >
                Change to Pink
            </button>
            <button
                style={{
                    marginRight: "10px",
                    color: "Yellow",
                    backgroundColor: "white",

                    borderRadius: "10px",
                    padding: "6px",
                }}
                onClick={() => changeColor("yellow")}
            >
                Change to Yellow
            </button>
            <button
                style={{
                    marginRight: "10px",
                    color: "Maroon",
                    backgroundColor: "white",

                    borderRadius: "10px",
                    padding: "6px",
                }}
                onClick={() => changeColor("maroon")}
            >
                Change to Maroon
            </button>
        </div>
    );
}

export default App;
