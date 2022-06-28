import React from 'react';
import './styles/styles.css';

const StyledLetter = ({letter}) => {
  return (
    <div className="letters-container">
        <h1 className="blue-letter">{letter}</h1>
        <h1 className="red-letter">{letter}</h1>
    </div>
  )
}

export default StyledLetter