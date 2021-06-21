#!/usr/bin/env node

import { getAnswer, startSpecificGame } from "../index.js";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function gamePredicateFunction() {
  const answerCheck = { 0: "yes", 1: "no" };

  const number = getRandomInt(25);
  const userAnswer = getAnswer(number);

  const rightAnswer = answerCheck[number % 2];

  return [rightAnswer === userAnswer, rightAnswer, userAnswer];
}

const gameRules =
  'Answer "yes" if the number is even, otherwise answer "no".\n';
const numberOfRounds = 3;

startSpecificGame(gameRules, gamePredicateFunction, numberOfRounds);
