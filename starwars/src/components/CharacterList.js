import React from 'react';
import Character from "./Character";

const CharacterList = ({ characterList }) => {
    return (
        <div>
            { renderCharacter(characterList) }
        </div>
    )
}

const renderCharacter = characterList => {
    const characters = characterList.map(character => <Character characterData={character} />);


    return characters;
}

export default CharacterList;