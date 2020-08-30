// Code your solutions in this file
const names = ["Lisa", "Kaitlin", "Jan"];

function writeCards(names, event) {
  let array = [];
  for (let i = 0; i < names.length; i++) {
    array.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return array;
}

writeCards(names, "surprise");

function countDown(num) {
  while (num > 0) {
    console.log(num);
    num -= 1;
  }
  console.log(num);
}

countDown(10);
