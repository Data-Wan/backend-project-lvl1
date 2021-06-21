#!/usr/bin/env node

import { getAnswer, startSpecificGame, getRandomInt } from '../index.js';

function gamePredicateFunction() {
  const answerCheck = { 0: 'yes', 1: 'no' };

  const number = getRandomInt(25);
  const userAnswer = getAnswer(number);

  const rightAnswer = answerCheck[number % 2];

  return [rightAnswer === userAnswer, rightAnswer, userAnswer];
}

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".\n';
const numberOfRounds = 3;

startSpecificGame(gameRules, gamePredicateFunction, numberOfRounds);
