import Player from "./components/player"

function App() { 

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          {/* <li>
            <span className="player">
              <span className="player-name">Player1</span>
              <span className="player-symbol">X</span>
            </span>
            <button>Edit</button> */}
            {/* This is repeating-1 */}
          {/* </li>
          <li>
            <span className="player">
              <span className="player-name">Player2</span>
              <span className="player-symbol">0</span>
            </span>
            <button>Edit</button> */}
            {/* This is repeating-2 */}
            {/* for these two we can create a component */}
         {/* </li> */}
         <Player name="Player1" symbol="X" />
         <Player name="Player2" symbol="0" />
        </ol>
        Game Board
      </div>
    </main>
    
  )
}

export default App
