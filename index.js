// Code your solutions in this file
function writeCards(names, message){
    let a = [];
    for (let i = 0; i < names.length; i++) {
        a.push(`Thank you, ${names[i]}, for the wonderful ${message} gift!`)
    }
    return a;
}

function countDown(int) {
    while (int >= 0) {
        console.log(int)
        int--
    }
}