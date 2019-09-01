import React from "react";
import "./style.css";

function WinCounter(props) {
    return (
        <div>
            <p className="wins">Wins: {props.wins} </p>
            <p className="losses">Losses: {props.losses}</p>
        </div>
    )
}

export default WinCounter;
