import { useState } from "react";

const initialValue = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];
export default function GameBoard({onSelectSquare,activePlayerSymbol}) {
    const [gameBoard, setGameBoard] = useState(initialValue);

    

    function handleSelectSquare(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map(innerArr => [...innerArr])];
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
            console.log(updatedBoard);
            return updatedBoard;

        });
        onSelectSquare();
    }

    return (

        <ol className="gameBoard flex ">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => handleSelectSquare( rowIndex,colIndex)}
                                    className=" w-24 h-24 text-xl bg-gradient-to-r 
                                    from-slate-600  to-red-700  m-2 text-white" >
                                    {playerSymbol}
                                    {console.log(playerSymbol)}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>))}
        </ol>

    )
}