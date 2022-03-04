import React, {useState} from "react";
import './style.css'



let  Preview = () => {
    let correctNumber = 0
    let correctPosition =0
    let ranNum = []

    startInteraction();
    generateRandomNumber();

    function startInteraction(){
                document.addEventListener("click", handleMouseClick)
                document.addEventListener("keydown", handleKeyPress)
            }
            
    function stopInteraction(){
                document.removeEventListener("click", handleMouseClick)
                document.removeEventListener("keydown", handleKeyPress)
            }

    function generateRandomNumber(){
                ranNum[0] = (Math.floor(Math.random() * 10))
                while(ranNum [0] === "0"){
                ranNum[0] = (Math.floor(Math.random() * 10))
                }
                ranNum[1] = (Math.floor(Math.random() * 10))
                while(ranNum[1] === ranNum[0]){
                ranNum[1] = (Math.floor(Math.random() * 10))
                }
                ranNum[2] = (Math.floor(Math.random() * 10))
                while(ranNum[2] === ranNum [0] || ranNum[2] === ranNum[1]){
                ranNum[2] = (Math.floor(Math.random() * 10))
                }
                ranNum[3] = (Math.floor(Math.random() * 10))
                while(ranNum[3] === ranNum[0]||ranNum[3] === ranNum[1]||ranNum[3] === ranNum[2]){
                ranNum[3] = (Math.floor(Math.random() * 10))
                }   
            }

          // used to assign the values the user inputs so that they can be displayed when they are pressed
    let [nums, setNums] = useState([])
    let [numsh, setNumsH] = useState([])

    function addItem(e){
        setNums([...nums, e])
    }

    function addItemH(){
        setNumsH([...nums, correctNumber, correctPosition])
    }

    function removeItem(){
        var numbs = [...nums]
        if (numbs.length < 4){
            numbs.splice(numbs.length - 1, 1);
        }
        else {
            numbs.splice(3, 1)
        }
          setNums(numbs)
        }

    function checkNumPo(){
        if (nums[0] !== ""  && nums[1] !== "" && nums[2] !== "" && nums[3] !== ""){
            for (let j = 0; j <= 3; j++){
                for (let i = 0; i <= 3; i++) {
                    if (nums[i] === ranNum[i]){
                        correctNumber++
                        if(j === i){
                            correctPosition++
                        }
                    }
                }
            }
        }
    }
      
    function handleMouseClick(e){
        if (e.target.matches("[data-enter]")){
            submitGuess()
            return
        }
        if (e.target.matches("[data-delete]")){
            deleteKey()
            return
        }
        if (e.target.matches("[data-key]")){
            pressKey(e.target.dataset.key)
            return
        }  
        if (e.target.matches("[data-history]")){
            pressHistory()
            return
        }
        if(e.target.matches("[data-back]")){
            pressBack()
            return
        }
    }
    function handleKeyPress(e){
        if (e.key === "Enter") {
            submitGuess()
            return
        }
        if (e.key === "Backspace" || e.key === "Delete") {
            deleteKey()
            return
        }
        if (e.key.match(/^[0-9]/)){
            pressKey(e.key)
            return
        }
        if (e.key === "h" || e.key === "H"){
            pressHistory()
            return
        }
        if (e.key === "b" || e.key === "B") {
            pressBack()
            return
        }
    }
     
    function submitGuess(){
        addItemH()
        setNums([])
        return   
    }
    function deleteKey(){
        removeItem()
        return
    }
    function pressKey(e){
        addItem(e)
        return
    }
    function pressBack(){
        console.log("backises")
        return  
        }
    function pressHistory(){
        console.log("histories")      
    }

    return (
        <div className="preview">
                <div className="guessed square" id="firsth">{numsh[0]}</div>
                <div className="guessed square" id="secondh">{numsh[1]}</div>
                <div className="guessed square" id="thirdh">{numsh[2]}</div>
                <div className="guessed square" id="fourthh">{numsh[3]}</div>
                <div className="estimated square" id="numberh">{numsh[4]}</div>
                <div className="estimated square" id ="positionh">{numsh[5]}</div>
                <div></div>
                <div className="guess square" id="first">{nums[0]}</div>
                <div className="guess square" id="second">{nums[1]}</div>
                <div className="guess square" id="third">{nums[2]}</div>
                <div className="guess square" id="fourth">{nums[3]}</div>
                <div></div>
        </div>
    )
}

export default Preview