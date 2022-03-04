import React from "react";

const History = () => {
    return (
        <div className="history">
            <div className="board-container">
                <div className="guessed history-square">2</div>
                <div className="guessed history-square">3</div>
                <div className="guessed history-square">3</div>
                <div className="guessed history-square">5</div>
                <div className="guessed history-square cat5 estimate">5</div>
                <div className="guessed history-square cat6 estimate">6</div>
                <div className="guessed history-square">8</div>
                <div className="guessed history-square">6</div>
                <div className="guessed history-square">5</div>
                <div className="guessed history-square">4</div>
                <div className="guessed history-square cat5 estimate">3</div>
                <div className="guessed history-square cat6 estimate">3</div>
                
            </div>
            <div className="h-buttons">
                <button className="game-btn width-full" data-game>GAME</button>
                <button className="track-btn width-full" data-track>TRACK</button>
            </div>
        </div>
    )
}

export default History