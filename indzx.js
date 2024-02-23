let player =   {
    name: "Keter",
    credips: 250
}
 let message = "";
 message = "we're logging out";
 console.log(message)
 let cards = [];
 let sum = 0;
 let hasBlackJack = false;
 let isAlive = false;
 let messageEl = document.getElementById("message-el");
 let sumEl = document.getElementById("sumEl");
 let cardEl = document.querySelector("#cardEl");
 let playerEl = document.querySelector('#player-id');
 playerEl.textContent = player.name + " "+":" +" $ "+ player.credips
 function getRandomCard(){
     let over = Math.random()*13; 
     let overP = Math.floor(over)   + 1;
  if(overP > 10){
    return 10;
  }
  else if(overP === 1){
    return 11;
  }
  else 
  return overP;
  
}

 function renderGame(){
     if(sum <= 20){
        
        message = "Do you want to draw a card ?";
    }
   else if(sum === 21){
       message = "You have got Blackjack! ";
         hasBlackJack = true;
   }
   else {
       message = "you're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
    sumEl.textContent = "Sum: " + sum;
    cardEl.textContent = "Cards: " 
    for(let i = 0; i < cards.length; i++){
        cardEl.textContent +=   cards[i] + " ";
   }
     }
     function startGame(){
        let firstCard = getRandomCard();
        let secondCard = getRandomCard();
        sum = firstCard + secondCard;
        cards = [firstCard, secondCard];
        isAlive = true
        renderGame();
     }
 function newCard(){
    if (isAlive === true && hasBlackJack === false){
        let card = getRandomCard();
        sum += card;
        cards.push(card)
        renderGame(); 
    }
   

 }
