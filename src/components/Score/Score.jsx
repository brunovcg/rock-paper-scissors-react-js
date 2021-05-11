import './Score.css'
const Score = () => {


    return(

        <div className="scoreContainer">

            <div className="scorePlayer">
                <div>{0}</div>
                <div>Player</div>
            </div>

            <div className="scoreTitle">Placar</div>

            <div className="scoreCPU">
                <div>{0}</div>
                <div>CPU</div>
            </div>

        </div>

    )
}

export default Score