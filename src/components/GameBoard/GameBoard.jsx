
import './GameBoard.css'

const GameBoard = () => {


    return (
        <div className="gameBoardContainer">

            <div className="gameBoardCPU">
                <div className="gamePlayerName">CPU</div>
                <div className="gameBoardChoice">{"Pedra"}</div>
            </div>

            <div className="gameBoardPlayer">
                <div className="gamePlayerName">Player</div>
                <div className="gameBoardChoice">{"Papel"}</div>

            </div>

        </div>    
    )

}

export default GameBoard