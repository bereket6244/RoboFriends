import React, {useState} from "react"
import Preview from "./Preview"

function Backendy(){
    let numbers = []

    const [nums, setNums] = useState("")
  
    startInteraction()
    
    function startInteraction(){
    document.addEventListener("click", handleMouseClick)
    document.addEventListener("keydown", handleKeyPress)
    }

    function stopInteraction(){
    document.removeEventListener("click", handleMouseClick)
    document.removeEventListener("keydown", handleKeyPress)
    }
    

    function handleMouseClick(e){
        if (e.target.matches("[data-enter]")){
            
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
        function removeDuplicates(numbers) {
            return numbers.filter((item, 
                index) => numbers.indexOf(item) === index);
        }
        console.log(removeDuplicates(numbers))
    }
    function deleteKey(){
        function removeLase(numbers){
            return numbers.pop
        }
       console.log(removeLase(numbers))
    }
    function pressKey(e){
         numbers.push(e)
         console.log("you have not entered " + e)
    }
    function pressBack(){
        console.log("back")
    }
    function pressHistory(){
        console.log("history")
    }
    return null
}

export default Backendy