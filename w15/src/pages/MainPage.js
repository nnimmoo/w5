// MainPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import CharacterInfo from '../compenents/CharacterInfo';
function MainPage({ character }) {
    const buttons = [];

    for (let index = 0; index < 5; index++) {
        buttons.push(
            <Link key={index} to={`/${index}`}>
                <button>See fact {index}</button>
            </Link>
        );
    }

    return (
        <div className="App">
            <h1>Main page</h1>
            <CharacterInfo character={character} />
            {buttons}
        </div>
    );
}

export default MainPage;
