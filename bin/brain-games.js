#!/usr/bin/env node

import readlineSync from 'readline-sync';


const startGameMessage = "Welcome to the Brain Games!\n"
const askNameMessage =  "May I have your name? "
const greetingMessage = "Hello, %s!";

console.log(startGameMessage);
const name = readlineSync.question(askNameMessage);
console.log(greetingMessage, name);



