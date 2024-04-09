import React, { useState } from 'react';

function Input({ handleGuess }) {
  const [guessInput, setGuessInput] = useState('');

  return (
    <form className="guess-input-wrapper" onSubmit={(event) => {
      event.preventDefault();

      if (guessInput.length === 5) {
        handleGuess(guessInput);
        setGuessInput('');
      } else {
        window.alert('Minimum of 5 letters.')
      }

    }}>
      <label htmlFor="guess-input">Enter guess: </label>
      <input id="guess-input" type="text" maxLength={5} value={guessInput} 
        onChange={(event) => {
          const value = event.target.value.toUpperCase();

          setGuessInput(value);
        }}
      />
    </form>
      
  );
}

export default Input;