import React, { useState } from "react";
import './style.css'

const colors = [
    "btn--normal",
    "btn--green",
    "btn--red",
    "btn--purple"
]
let checkButtonStyles = colors[0]
let n = 0 


function Clr_btn({children}) {
    let [counter, setCounter] = useState(1)
    const increament = () => {
            setCounter((prev) => prev + 1 )
            if (counter%4===0){
                n = counter/4
            }
            if (counter-4*n < 0){
                return
            }
            console.log( counter - 4*n)
            checkButtonStyles = colors[counter - 4*n]      
    }

    return ( 
        <div>
                <button 
                    className={`key clr-btn ${checkButtonStyles}`} 
                    onClick= {increament}
                >
                {children}</button>
        </div>
    )
}

export default Clr_btn