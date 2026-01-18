'use strict';

// selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

// rolling dice functionality
btnRoll.addEventListener('click', function () {
  // 1) generate a random dice number
  const diceNumber = Math.trunc(Math.random() * 6) + 1;
  // 2) display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${diceNumber}.png`;

  // 3) check roll for 1
  if (diceNumber !== 1) {
    //add dice to current Score
    currentScore += diceNumber;
    current0El.textContent = currentScore;
  } else {
    // switch to other player
  }
});
