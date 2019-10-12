import React from 'react';
import './Person.css';

function Person(props) {
    return (
        <div className="Person-container">
            <span className="Person">{props.name}</span>
        </div>
    );
}

export default Person;