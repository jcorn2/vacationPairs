import React, { useState } from 'react';
import Person from './person/Person';
import './PairGenerator.css';

const intialPeople = ['Mom', 'Dad', 'Mike', 'Betsy', 'Joe', 'Kristen', 'George', 'Greg', 'Mary', 'Zach'];

function PairGenerator() {
    const [people, setPeople] = useState(Array.from(intialPeople));

    return (
        <div className="PairGenerator-Container">
            <div className="PairGenerator-Pairs">
                {
                    people.map((person) => (
                        <Person name={person} key={person} />
                    ))
                }
            </div>
            <div className="PairGenerator-Button-Container">
                <button className="PairGenerator-Button" onClick={() => setPeople(Array.from(people).sort(() => Math.random() - 0.5))}>Shuffle</button>
                <button className="PairGenerator-Button" onClick={() => setPeople(intialPeople)}>Restart</button>
            </div>
        </div>
    );
}

export default PairGenerator;