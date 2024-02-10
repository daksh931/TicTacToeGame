import { useState } from "react";
import GameBoard from "./GameBoard";
import Player from "./Player";

export default function Homepage() {
    const[activePlayer, setActivePlayer] = useState('X');

    function handleSelectSquare(){
        setActivePlayer( (curActivePlayer) => curActivePlayer === 'X' ? 'O':'X' );
      }

    return (
        < >
            <div className="flex justify-center w-[100vw] min-h-[100vh] text-cyan-600 text-lg font-semibold font-serif"
                style={{
                    backgroundImage: `url("back1.jpg")`,
                    backgroundPosition: `top center`,
                    // backgroundSize:`relative`, 
                    backgroundSize: `100vw 110vh`,
                    backgroundRepeat: `repeat-y`
                }} >

                <div className="UpperPart flex flex-col items-center backdrop-blur-sm md:backdrop-blur-lg bg-black/25  p-2 rounded-md  mt-20 min-w-2/5 h-[27rem] mb-2 ">

                    <div className="Game container p-2">
                        <ol className=" w-full players flex justify-evenly align-middle	 flex-row"> 
                            <Player name="Player 1" symbol="X" isActive={activePlayer === 'X'} />  
                            <Player name="Player 2" symbol="O" isActive={activePlayer === 'O'} />  
                        </ol>
                    </div>

                    {/* Game Board Squared Boxes */}
                   <div className="">
                    <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
                   </div>
                    {/* Game Board Squared Boxes */}
                </div>

            </div>

            
        </>
    )
}