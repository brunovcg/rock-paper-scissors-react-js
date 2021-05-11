
import './GameBoard.css'

const GameBoard = (props) => {

    
    return (
        <div className="gameBoardContainer">

            <div className="gameBoardCPU">
                <div className="gamePlayerName">CPU</div>
                <div className="gameBoardChoice">{props.CPUMove}</div>
            </div>

            <div className="gameBoardPlayer">
                <div className="gamePlayerName">Player</div>
                <div className="gameBoardChoice">{props.playerMove}</div>

            </div>

        </div>    
    )

}

export default GameBoard