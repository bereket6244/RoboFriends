import React from "react";
import Backendy from "./Backendy";
import Game from './Game'
import History from "./History";
import './style.css'
import Track from "./Track";

const Container = () => {
    return (
        <div className="container">
            <Backendy/>
            <History/>
            <Game />
            <Track/>
        </div>
    )
}

export default Container