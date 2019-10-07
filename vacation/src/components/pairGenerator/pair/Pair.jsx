import React from 'react';
import './Pair.css';

function Pair(props) {
    return (
        <div className="Pair-pair-container">
            {props.names.map((name) => (
                <span key={name} className="Pair-person">{name}</span>
            ))}
        </div>
    );
}

export default Pair;