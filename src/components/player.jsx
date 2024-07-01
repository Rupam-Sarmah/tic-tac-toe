import { useState } from "react";
export default function Player({name, symbol}){
    const [isEditing, setIsEditing] =useState(false);

    function handleEditClick(){
        setIsEditing(true);
    }
    let playername= <span className="player-name">{name}</span>;
    if(isEditing){
        playername=<input type="text" required />
    }
    return (
        <li>
            <span className="player">
              
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onclick={handleEditClick}>Edit</button>
            {/* edit button + save button . so need to use useSatate here */}
        </li>
    );
}