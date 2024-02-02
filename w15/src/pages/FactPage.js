// FactPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

function FactPage() {
    const { factId } = useParams();

    const facts = [
        { id: 0, fact: "Scooby-Doo loves Scooby Snacks." },
        { id: 1, fact: "Scooby-Doo is a Great Dane." },
        { id: 2, fact: "Scooby-Doo is easily frightened." },
        { id: 3, fact: "Scooby-Doo helps solve mysteries." },
        { id: 4, fact: "Scooby-Doo has a distinctive speech pattern." },
    ];

    // Find the fact corresponding to the factId
    const selectedFact = facts.find((fact) => fact.id === parseInt(factId));

    return (
        <div className="App">
            <h1>Fact</h1>
            {selectedFact ? <p>{selectedFact.fact}</p> : <p>Fact not found</p>}
        </div>
    );
}

export default FactPage;
