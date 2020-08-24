// Code your solutions in this file
    const cards = ["Lisa", "Kaitlin", "Jan"];
    const eventName = "birthday"

    function writeCards(cards, eventName) {
        let messages = []
        for(let i = 0; i < cards.length; i++) {
           messages.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`); 
        }
       return messages
    }


    countDown(10)
    function countDown(number){
        while(number >= 0) {
            console.log(number);
            number--
        }
     }

    
    
        
   


