import React from 'react';
import './styles/styles.css';

const StyledLetter = ({letter, transform}) => {
  return (
    <div className="letters-container">
        <h1 className="blue-letter">{letter}</h1>
        <h1 className="red-letter" style={{transform: `translateX(${transform}px)`}}>{letter}</h1>
    </div>
  )
}

export default StyledLetter