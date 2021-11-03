import React, {useState} from "react"
import useWordGame from "./useWordGame"

function App() {

    const [number, setNumber] = useState(10)
    const {
        textBoxRef, 
        handleChange, 
        text, 
        isTimeRunning, 
        timeRemaining, 
        startGame, 
        wordCount
    } = useWordGame(number)

    function handleNumber(e) {
        const {value} = e.target
        setNumber(value)
    }

    return (
        <div>
            <h1>How fast do you type?</h1>
            <input 
               onChange={handleNumber} 
               value={number}
               placeholder="set your timer here"
            />
            <textarea
                ref={textBoxRef}
                onChange={handleChange}
                value={text}
                disabled={!isTimeRunning}
            />
            <h4>Time remaining: {timeRemaining}</h4>
            <button 
                onClick={startGame}
                disabled={isTimeRunning}
            >
                Start
            </button>
            <h1>Word count: {wordCount}</h1>
        </div>
    )
}

export default App
