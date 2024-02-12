const initialValue = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];
export default function GameBoard({onSelectSquare,turns}) {
    let gameBoard = initialValue;

    
    for(const turn of turns){
        // console.log(turn)
        const{ square, player} = turn;
        const{row,col} =square;

        //gameBoard initialized with (initial 2D arr of gameboard) now updating particular cell...
        gameBoard[row][col] = player;
    }
    // function handleSelectSquare(rowIndex, colIndex) {
    //     setGameBoard((prevGameBoard) => {
    //         const updatedBoard = [...prevGameBoard.map(innerArr => [...innerArr])];
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         console.log(updatedBoard);
    //         return updatedBoard;

    //     });
    //     onSelectSquare();
    // }

    return (

        <ol className="gameBoard flex ">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => onSelectSquare( rowIndex,colIndex)}
                                    className=" w-24 h-24 text-xl bg-gradient-to-r 
                                    from-slate-600  to-red-700  m-2 text-white"
                                    disabled={playerSymbol != null}>
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