#!/usr/bin/env node

import { getAnswer, getRandomInt, startSpecificGame } from '../index.js';

function gamePredicateFunction() {
  const firstItemProgression = getRandomInt(100);
  const progressionStep = getRandomInt(10);
  const skippedElementIndex = getRandomInt(10);
  const length = 10;

  const numbersArray = [];

  for (let i = 0; i < length; i += 1) {
    numbersArray.push(firstItemProgression + i * progressionStep);
  }

  const rightAnswer = numbersArray[skippedElementIndex];
  numbersArray[skippedElementIndex] = '..';

  const userAnswer = getAnswer(numbersArray.join(' '));

  return [
    rightAnswer === Number.parseInt(userAnswer, 10),
    rightAnswer,
    userAnswer,
  ];
}

const gameRules = 'What number is missing in the progression?\n';
const numberOfRounds = 3;

startSpecificGame(gameRules, gamePredicateFunction, numberOfRounds);
