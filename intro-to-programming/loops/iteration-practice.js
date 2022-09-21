let names = ["Chris", "Kevin", "Naveed", "Pete", "Victor"];
let upperNames = [];

for (let index = 0; index < names.length; index++) {
  if (names[index] === "Naveed") continue;

  let element = names[index].toUpperCase();
  upperNames.push(element);
}

console.log(upperNames); // => ['CHRIS', 'KEVIN', 'PETE', 'VICTOR']
