// Code your solutions in this file

function writeCards(people, word){
    const array = []
    for (let i = 0; i < people.length; i++){
        array.push(`Thank you, ${people[i]}, for the wonderful ${word} gift!`);
    }
    return array
}

function countDown(num){
    let i = num
    while (i >= 0){
        console.log(i);
        i--;
    }
}
