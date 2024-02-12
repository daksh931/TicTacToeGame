export default function Gameover({winner , onRestart}){

    return (
       <div >
        <h2> Game Over {winner}! </h2>
       {winner &&  <p>  {winner} won ! </p>}
        {!winner && <p> It's withdraw</p>}
        <p>
            <button onClick={onRestart}>Rematch!</button>
        </p>

       </div>
    );
}