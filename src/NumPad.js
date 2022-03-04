import React from 'react'
import Game from './Game'
import './style.css'

function NumPad() {
   
        
    return (
        <div className='keyboard'>

            <div className='span-3'>
            <button className='key width-full' data-history>HISTORY</button>
            <button className='key width-full' data-track>TRACK</button>
            </div>
            <button className='key' data-key={"1"}>1</button>
            <button className='key' data-key={"2"}>2</button>
            <button className='key' data-key={"3"}>3</button>
            <button className='key' data-key={"4"}>4</button>
            <button className='key' data-key={"5"}>5</button>
            <button className='key' data-key={"6"}>6</button>
            <button className='key' data-key={"7"}>7</button>
            <button className='key' data-key={"8"}>8</button>
            <button className='key' data-key={"9"}>9</button>
            <button className='key' data-delete >D</button>
            <button className='key' data-key={"0"} >0</button>
            <button className='key' data-enter>E</button>
        </div>
    )
}

export default NumPad