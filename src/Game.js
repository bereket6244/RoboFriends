import React, {useState} from "react";
import NumPad from "./NumPad";
import Preview from "./Preview";

const Game = () => {

    return (
        <div className="game">
            <div className="p-view">
            <Preview numd = {1}/>  
            </div>
            <div className="k-board">
                < NumPad />
            </div>
        </div>
    )
}

export default Game