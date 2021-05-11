import Score from './components/Score/Score'
import GameBoard from './components/GameBoard/GameBoard'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">

        <header>
          <Score/>
        </header>

        <main> 
          <GameBoard/>
        </main>

        <footer>

          <button>Pedra</button> 
          <button>Papel</button>
          <button>Tesoura</button>

        </footer>




      </div>
    </div>
  );
}

export default App;
