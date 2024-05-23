/*
* This Component will render the Final 'Game Over Screen'
* Either Player1 or Player2 wins
* Else it shows as 'Draw'
*/

export default function GameBoard({onSelectSquare, gameBoard})
{
    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
            <li key={rowIndex}>
                <ol>
                    {
                        row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
                            </li>
                        ))
                    }
                </ol>
            </li>))}
        </ol>
    );
}