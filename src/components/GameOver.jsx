/*
* This Component will render the Final 'Game Over Screen'
* Either Player1 or Player2 wins
* Else it shows as 'Draw'
*/

export default function GameOver({winner, onRestart})
{
    return <div id="game-over">
        <h2>Game Over!</h2>
        {winner && <p>{winner} Won!</p>}
        {!winner && <p>It is a Draw</p>}
        <p><button onClick={onRestart}>Rematch!</button></p>
    </div>
}