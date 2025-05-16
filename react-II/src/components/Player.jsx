import { useState } from "react";

export default function Player({ name = "Player", symbol }) {
    const [isEditing, setIsEditing] = useState(false);
    const [Name, setName] = useState(name);

    const handleEditing = () => {
        setIsEditing(isEditing => !isEditing);
    }

    const handleChange = (event) => {
        console.log(event.target.value);
        setName(event.target.value);
    }

    return (
        <li>
            <span className="player">
                {isEditing ? <>
                    <span className="player-name">
                        <input placeholder="Player Name" required value={Name} onChange={handleChange}/>
                    </span>
                    <span className="player-symbol">
                        {symbol}
                    </span>
                </> : <>
                    <span className="player-name">
                        {Name}
                    </span>
                    <span className="player-symbol">
                        {symbol}
                    </span>
                </>}
            </span>
            <button onClick={handleEditing}>
                {isEditing ? "Submit" : "Edit"}
            </button>
        </li>
    );
}