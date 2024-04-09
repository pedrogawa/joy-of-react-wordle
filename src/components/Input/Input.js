import React from 'react';

function Input({ guessInput, setGuessInput }) {
  return (
    <div className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess: </label>
      <input id="guess-input" type="text" maxLength={5} value={guessInput} 
        onChange={(event) => {
          const value = event.target.value;

          setGuessInput(value);
        }}
      />
    </div>
      
  );
}

export default Input;