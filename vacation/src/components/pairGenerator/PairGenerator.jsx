import React, { useState } from 'react';
import Pair from './pair/Pair';

const intialPeople = ['Mom', 'Dad', 'Mike', 'Betsy', 'Joe', 'Kristen', 'George', 'Greg', 'Mary', 'Zach'];

function PairGenerator() {
    const [people] = useState(intialPeople);
    people.sort(() => Math.random() - 0.5);
    const firstHalf = people.slice(0, people.length / 2);
    const secondHalf = people.slice(people.length / 2, people.length);

    return (
        <div>
            {
                firstHalf.map((person, index) => <Pair key={index} names={[person, secondHalf[index]]} />)
            }
        </div>
    );
}

export default PairGenerator;