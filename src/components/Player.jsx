import { useState } from "react";

export default function Player({initialName, symbol, isActive, onChangeName})
{
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick()
    {
      setIsEditing((editing) => !editing);
      if(isEditing)
      {
      onChangeName(symbol, playerName);
      }
    }

    function handleChange(event)
    {
      setPlayerName(event.target.value);
    }

    let editablePlayerName = isEditing ? (<input type="text" required defaultValue={playerName} onChange={handleChange}></input>) 
    :  (<span className="player-name">{playerName}</span>) ;

    let buttonCaption = isEditing ?  "Save" : "Edit" ;

    return (
        <li className={isActive ? 'active' : undefined}>
        <span class="player">
        {editablePlayerName}
        <span class="player-symbol">{symbol}</span>
        </span>
        <button onClick = {handleEditClick}>{buttonCaption}</button>
      </li>

    );
}