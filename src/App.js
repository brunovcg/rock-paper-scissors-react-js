import GameBoard from './components/GameBoard/GameBoard'
import Score from './components/Score/Score'
import './App.css';
import FinishGame from './components/FinishGame/FinishGame';
import { useState, useEffect } from 'react'

function App() {

  const [playerScore, setPlayerScore] = useState(0)
  const [CPUScore, setCPUScore] = useState(0)
  const [playerMove, setPlayerMove] = useState("")
  const [CPUMove, setCPUMove] = useState("")
  const [showWinner, setShowWinner] = useState(false)
  const [whoWin, setWhoWin] = useState("")

  const weGetwinner = () => {setShowWinner(!showWinner)}

  const restart = () =>{
    
    weGetwinner()

    setCPUMove("")

    setPlayerMove("")
    
  }


  const shuffleCPU = () => {

   let shuffleNumber = Math.ceil(Math.random() * 3);
   let chosenMove = "";

   if (shuffleNumber === 1) {chosenMove = "Rock"} 
   
    else if (shuffleNumber === 2) {chosenMove = "Paper"} 

    else {chosenMove = "Scissors"}

   return chosenMove
  }

  const testWin = () => {

    let moveCpu = shuffleCPU()

    if(playerMove!=="") {setCPUMove(moveCpu)}

    if (playerMove === "Rock" && moveCpu === "Paper" ) {setCPUScore(CPUScore + 1); setWhoWin("CPU wins!")}

      else if (playerMove === "Rock" && moveCpu === "Scissors" ) {setPlayerScore(playerScore + 1); setWhoWin("Player wins!")}

      else if (playerMove === "Paper" && moveCpu === "Rock" ) {setPlayerScore(playerScore + 1); setWhoWin("Player wins!")}

      else if (playerMove === "Paper" && moveCpu=== "Scissors" ) {setCPUScore(CPUScore + 1); setWhoWin("CPU wins!")}

      else if (playerMove === "Scissors" && moveCpu === "Rock" ) {setCPUScore(CPUScore + 1); setWhoWin("CPU wins!")}

      else if (playerMove === "Scissors" && moveCpu === "Paper" ) {setPlayerScore(playerScore + 1); setWhoWin("Player wins!")}

      else (setWhoWin("it's a Draw!"))

  }


  useEffect(()=>{


  
    testWin()

    if(playerMove!=="") {weGetwinner()}



    
  },[playerMove])





  return (
    <div className="App">
      <div className="App-header">

        <header>
          <Score cpuScore={CPUScore} playerScore={playerScore}/>
        </header>

        <main> 
          <GameBoard playerMove={playerMove} CPUMove={CPUMove}/>
          
        </main>

        <footer>

        {showWinner === true ? <FinishGame press={restart} whoWin={whoWin}/> : 

          <>
            <button onClick={()=> {setPlayerMove("Rock")}}>Rock</button> 
            <button onClick={()=> {setPlayerMove("Paper")}}>Paper</button>
            <button onClick={()=> {setPlayerMove("Scissors")}}>Scissors</button>
          </>
        }
        </footer>


      </div>
    </div>
  );
}

export default App;
