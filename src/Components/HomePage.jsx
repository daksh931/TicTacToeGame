import { useState } from "react";
import GameBoard from "./GameBoard";
import Player from "./Player";
import Log from "./Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import Gameover from "./Gameover";

const initialValue = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

function derivedActivePlayer(gameTurns){
    let currentPlayer = 'X';

    if(gameTurns.length>0 && gameTurns[0].player==='X'){
        currentPlayer='O';
    }
    return currentPlayer;
}

export default function Homepage() {
    
    const[ gameTurns , setGameTurns] = useState([]);
    // const [hasWinner, setHasWinner] = useState(false);
    // const[activePlayer, setActivePlayer] = useState('X');
    const activePlayer = derivedActivePlayer(gameTurns);
    
    let gameBoard = [...initialValue.map( innerArr=> [...innerArr])];
    for(const turn of gameTurns){
        // console.log(turn)
        const{ square, player} = turn;
        const{row,col} =square;

        //gameBoard initialized with (initial 2D arr of gameboard) now updating particular cell...
        gameBoard[row][col] = player;
    }
    let winner ;
    for(const combination of WINNING_COMBINATIONS){
        const fistSquareSymbol = gameBoard[combination[0].row] [combination[0].column]  ;
        const secondSquareSymbol = gameBoard[combination[1].row] [combination[1].column]  ;
        const thirdSquareSymbol = gameBoard[combination[2].row] [combination[2].column]  ;
        
        if(fistSquareSymbol && fistSquareSymbol === secondSquareSymbol && fistSquareSymbol === thirdSquareSymbol){
            winner = fistSquareSymbol;
        }

    }

    const hasDraw =  gameTurns.length === 9 && !winner;
    function handleSelectSquare(rowIndex,colIndex){
        // setActivePlayer( (curActivePlayer) => (curActivePlayer === 'X' ? 'O':'X') );    
        setGameTurns( (prevTurns)=> {
            const currentPlayer = derivedActivePlayer(prevTurns);        
            const updatedTurns = [
                {square : {row: rowIndex, col:colIndex}, player:currentPlayer  },
                ...prevTurns,
            ];
            return updatedTurns;
        });
      }

    function handleRestart(){
        setGameTurns([]); 
    }  
    return (
        < >
        <div className="main min-h-[130vh] flex flex-col  text-cyan-600  text-lg font-semibold font-serif"
        style={{
            backgroundImage: `url("back1.jpg")`,
            backgroundPosition: `top center`,
            // backgroundSize:`relative`, 
            backgroundSize: `100vw 110vh`,
            backgroundRepeat: `repeat-y`
        }} >

       
            <div className="flex justify-center  w-[100vw] "
                >

                <div className="UpperPart flex  flex-col items-center backdrop-blur-sm md:backdrop-blur-lg bg-black/25  p-2 rounded-md  mt-20 min-w-[36vw] h-[27rem] mb-2 ">

                    <div className="Game container  ">
                        
                        <ol className=" m-2 flex justify-evenly" style={{display : 'flex'}}> 
                            <Player name="Player 1" symbol="X" isActive={activePlayer === 'X'} />  
                            <Player name="Player 2" symbol="O" isActive={activePlayer === 'O'} />  
                        </ol>
                    </div>
                    {(winner || hasDraw) && <Gameover winner={winner} onRestart={handleRestart}/>}
                    {/* Game Board Squared Boxes */}
                   <div className="">
                    <GameBoard onSelectSquare={handleSelectSquare} gameBoard={gameBoard}  />
                   </div>
                    {/* Game Board Squared Boxes */}
                </div>
                
            </div >
            <div className="flex justify-center">

                <Log turns={gameTurns}/>
            </div>
                </div>
            
        </>
    )
}