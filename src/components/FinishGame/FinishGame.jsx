import './FinishGame.css'

const FinishGame = (props) => {

    return (
        <div className='finishGameBox'>
            <div>{props.whoWin}</div>
            <button onClick={()=>props.press()}>Jogar Novamente</button>
        </div>
    )
}

export default FinishGame