"use strict";

import { greet, users, evenNum } from "./src/utils.js";
import _ from "lodash";

const shuffledUsers = _.shuffle(users);

const winner = shuffledUsers[0];

console.log(greet(winner.name));

console.log(
  `Hello ${winner.name} you have been added to the list for the winning jackpot.`
);
console.log(`You are the winner ${winner.name}!`);

const someNumber = 74089;
if (evenNum(someNumber)) {
  console.log(`${someNumber} is even!`);
} else {
  console.log(`${someNumber} is odd`);
}
