import Player from "./components/Player"

function App() {


  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Player I" symbol="X"/>
          <Player name="Player II" symbol="O"/>
        </ol>
        GAMEBOARD
      </div>
      LOG
    </main>
  )
}

export default App
