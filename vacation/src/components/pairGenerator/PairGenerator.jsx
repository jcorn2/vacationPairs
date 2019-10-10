import React, { useState } from 'react';
import Pair from './pair/Pair';
import './PairGenerator.css';

const intialPeople = ['Mom', 'Dad', 'Mike', 'Betsy', 'Joe', 'Kristen', 'George', 'Greg', 'Mary', 'Zach'];

function PairGenerator() {
    const [people, setPeople] = useState(Array.from(intialPeople));

    return (
        <div className="PairGenerator-Container">
            <div className="PairGenerator-Pairs">
                {
                    people.reduce((result, value, index, array) => {
                        if (index % 2 === 0) {
                            result.push(array.slice(index, index + 2));
                        }
                        return result;
                    }, []).map((persons, index) => <Pair key={index} names={persons} />)
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