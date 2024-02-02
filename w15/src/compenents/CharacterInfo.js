// CharacterInfo.js
import React from 'react';

function CharacterInfo({ character }) {
    return (
        <div className="character-info">
            <img src={character.photo} alt={character.name} />
            <h2>{character.name}</h2>
        </div>
    );
}

export default CharacterInfo;
