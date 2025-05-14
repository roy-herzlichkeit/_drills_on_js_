import { useState } from "react";

export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false);

    const handleEditing = () => {
        setIsEditing(!isEditing);
    }

    return (
        <li>
            <span className="player">
                {isEditing ? <>
                    <input placeholder="Player Name"/>
                    <span className="player-symbol">
                        {symbol}
                    </span>
                </> : <>
                    <span className="player-name">
                        {name}
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