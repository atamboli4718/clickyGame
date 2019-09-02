import React from "react";
import "./style.css";

class WinCounter extends React.Component {
    targetNumber= (Math.floor(Math.random() * 104) + 50);

    render() {
        return (
            <div>
                <p className="targetNumber">Targer Number: {this.targetNumber}</p>
                <p className="wins">Wins: {this.props.wins} </p>
                <p className="losses">Losses: {this.props.losses}</p>
                <p className="yourGuess">Your Guess: {this.props.guess}</p>
            </div>
        );
    }
}



export default WinCounter;
