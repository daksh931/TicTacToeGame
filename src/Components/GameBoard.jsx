import { useState } from "react";

const initialValue = [
    [null, null,null],
    [null, null,null],
    [null, null,null],
];
export default function GameBoard(){
    const[gameBoard, setGameBoard] = useState(initialValue);

    function handleSelectSquare(rowIndex,colIndex){
        setGameBoard( (prevGameBoard) => {
            prevGameBoard[rowIndex][colIndex] = 'X';
            
        });
    }

    return (

        <ol className="gameBoard flex ">
            {initialValue.map(  (row,rowIndex)=> (<li key={rowIndex}> 
            <ol>
                {row.map( (playerSymbol,colIndex) => (<li key={colIndex}><button className="w-24 m-2 h-24 bg-slate-800" > {playerSymbol} </button></li>))}
            </ol>
            </li>) )}
        </ol>
    
    )
}