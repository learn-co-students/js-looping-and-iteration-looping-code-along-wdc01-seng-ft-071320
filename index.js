// Code your solutions in this file

let cards = []


function writeCards(name,event)

{
    for(let count = 0; count < name.length; count++)
    {
   
    cards.push(`Thank you, ${name[count]}, for the wonderful ${event} gift!`)
    
    }
    return cards
}

function countDown(count)
{
while(count > -1) {
    console.log(count--) 

}
}