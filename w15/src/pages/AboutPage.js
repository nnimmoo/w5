// AboutPage.js
import React from 'react';
import CharacterInfo from '../compenents/CharacterInfo';

function AboutPage({ character }) {
  return (
    <div className="App">
      <h1>About page</h1>
      <CharacterInfo character={character} />
      {/* Add additional character information here */}
    </div>
  );
}

export default AboutPage;
