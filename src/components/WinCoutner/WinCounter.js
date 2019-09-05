import React from "react";
import "./style.css";

class WinCounter extends React.Component {

    render() {
        return (
            <div>
                <p className="targetNumber">Targer Number: {this.props.targetNumber}</p>
                <p className="wins">Wins: {this.props.wins} </p>
                <p className="losses">Losses: {this.props.losses}</p>
                <p className="yourGuess">Your Guess: {this.props.guess}</p>
            </div>
        );
    }
}



export default WinCounter;
