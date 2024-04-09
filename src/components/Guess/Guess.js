import React from 'react';
import { range } from '../../utils'

function Guess({ guesses }) {
  // console.log(range(1, 6).map);  
  return (
    <div className="guess-results">
      {guesses.map(guess => (
        <p key={guess.id} className="guess">{guess.guess}</p>
      ))}
    </div>
  );
}

export default Guess;