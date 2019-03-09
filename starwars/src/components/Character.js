import React from 'react';

const Character =  ({ characterData: {
    birth_year,
    eye_color,
    hair_color,
    height,
    name,
    mass,
    skin_color
}})  => {

    return (
      <div className="character">
          <h2>{ name }</h2>
          <div className="characterData">
              <p><strong>Birth Year</strong> {birth_year}</p>
              <p><strong>Eye Color</strong>{eye_color}</p>
              <p><strong>Hair Color</strong>{hair_color}</p>
              <p><strong>Height</strong>{height}</p>
              <p><strong>Weight</strong>{mass}</p>
              <p><strong>Skin Color</strong>{skin_color}</p>
          </div>
      </div>
    );
}

export default Character;