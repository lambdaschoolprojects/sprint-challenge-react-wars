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
              <div className="detail"> <p><strong>Birth Year </strong></p><p> {birth_year}</p> </div>
              <div className="detail"> <p><strong>Eye Color </strong></p><p>{eye_color}</p></div>
              <div className="detail"> <p><strong>Hair Color </strong></p><p>{hair_color}</p></div>
              <div className="detail"> <p><strong>Height </strong></p><p>{height}</p></div>
              <div className="detail"> <p><strong>Weight </strong></p><p>{mass}</p></div>
              <div className="detail"> <p><strong>Skin Color </strong></p><p>{skin_color}</p></div>
          </div>
      </div>
    );
}

export default Character;