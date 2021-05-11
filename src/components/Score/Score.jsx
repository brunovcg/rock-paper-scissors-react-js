import './Score.css'

const Score = (props) => {


    return(

        <div className="scoreContainer">

            <div className="scorePlayer">
                <div>{props.playerScore}</div>
                <div>Player</div>
            </div>

            <div className="scoreTitle">Score</div>

            <div className="scoreCPU">
                <div>{props.cpuScore}</div>
                <div>CPU</div>
            </div>

        </div>

    )
}

export default Score