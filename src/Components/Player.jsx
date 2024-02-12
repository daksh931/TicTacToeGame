import { useState } from "react"

export default function Player({name,symbol, isActive}){

    const [isEditing,setisEditing] = useState(false);
    const [playerName,setPlayerName] = useState(name);

    function handleisEditing(){
        setisEditing((isEditing) => !isEditing);
    }

    function handleChange(event){
        setPlayerName(event.target.value); 
    }

    let editableplayerName = <span className="playerName px-1">{playerName}</span>;
    if(isEditing){
        editableplayerName = <input className="text-sm w-24 border-[1px] border-orange-800 pl-1 mr-2" onChange={handleChange} value={playerName}></input>
    }

    return(
        <>
            <div> 
                <li className={isActive ? "border-red-600 border-[1px] px-1" : undefined}>
                    <span className="player p-2 "> 
                        {editableplayerName}
                        <span className="playerSymbol px-1 border-[1px] border-amber-900 ">{symbol}</span>
                    </span>
                    <button onClick={handleisEditing}  >  { isEditing?"Save":"Edit"}</button>
                </li>
            </div>
        </>
    )
}