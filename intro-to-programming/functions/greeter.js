function getName(prompt) {
  const readline = require("readline-sync");
  let name = readline.question(prompt);
  return name;
}

let firstName = getName("What is your first name?");
let lastName = getName("What is your last name?");
console.log(`Hey ${firstName} ${lastName}!`);
