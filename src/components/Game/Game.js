import React, { useState } from 'react';

import Input from '../Input/Input';
import Guess from '../Guess/';


import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState(new Array(5).fill({}))
   const [guessCount, setGuessCount] = useState(0);

   console.log(guesses);

  function handleGuess(guess) {
    const nextGuesses = [...guesses];

    nextGuesses.push({
      id: crypto.randomUUID(),
      guess: guess,
    });
    setGuesses(nextGuesses);
    
  }
  return (
    <>
      <Guess guesses={guesses} />
      <Input handleGuess={handleGuess}/>
    </>
  )
}

export default Game;
