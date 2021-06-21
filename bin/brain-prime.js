#!/usr/bin/env node

import { getAnswer, getRandomInt, startSpecificGame } from '../index.js';

function isPrime(num) {
  const notPrimeAnswer = 'no';
  const primeAnswer = 'yes';

  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return notPrimeAnswer;
    }
  }
  if (num > 1) {
    return primeAnswer;
  }
  return notPrimeAnswer;
}

function gamePredicateFunction() {
  const number = getRandomInt(100);

  const rightAnswer = isPrime(number);

  const userAnswer = getAnswer(number);

  return [rightAnswer === userAnswer, rightAnswer, userAnswer];
}

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';
const numberOfRounds = 3;

startSpecificGame(gameRules, gamePredicateFunction, numberOfRounds);
