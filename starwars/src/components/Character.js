import React from 'react';

const Character = ({
    birth_year,
    eye_color,
    films,
    hair_color,
    height,
    name,
    mass,
    skin_color,
                   }) => {
    return (
      <div className="character">
          <h2>{ name }</h2>
      </div>
    );
}

export default Character;