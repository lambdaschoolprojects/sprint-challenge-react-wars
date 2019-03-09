import React from 'react';

import Character from "./Character";

import './StarWars.css';

const CharacterList = ({ characterList }) => {
    return (
        <div className="characterList">
            { renderCharacter(characterList) }
        </div>
    )
}

const renderCharacter = characterList => {
    const characters = characterList.map(character => <Character key={character.url} characterData={character} />);


    return characters;
}

export default CharacterList;