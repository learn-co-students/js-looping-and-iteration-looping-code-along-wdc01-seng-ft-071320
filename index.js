// Code your solutions in this file

function writeCards(name, event) {
  let array = []
  for (let i = 0; i < name.length; i++) {
    array.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
  }
  return array
}

writeCards(["Lisa", "Kaitlin", "Jan"], "surprise");

function countDown(num) {
  while (num > 0) {
    console.log(num)
    num -= 1
  }
  console.log(num)
}