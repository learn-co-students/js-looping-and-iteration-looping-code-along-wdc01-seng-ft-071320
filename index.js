// Code your solutions in this file

let names = ["Ada", "Brendan", "Ali"];
const eventname = "birthday";

function writeCards(names, eventname) {
    const cards = []
    for (let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${eventname} gift!`);
    }
    return cards;
}
writeCards(names, eventname);


function countDown(x) {
    let n = x
    while(n >= 0) {
        console.log(n);
        n--;
    }
}
countDown(10);