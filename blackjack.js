let firstCard=Math.floor(Math.random()*10+1)
let secondCard=Math.floor(Math.random()*10+1)
let sum=firstCard+secondCard
let cards=[firstCard,secondCard]
let message=""
let sumEl=document.getElementById("sum-el")
let messageEl=document.getElementById("message-el") 
let cardsEl=document.getElementById("cards-el")
function startGame(){
    renderGame()
}
function renderGame(){
    cardsEl.textContent="Cards:"+" "+cards[0]+" "+cards[1]
    if(sum <=20){
        message="Do you want to draw a new card?😊"
    
    }else if(sum === 21){
        message="Whoo! you've got Blackjack! 😍"
    }else{
        message="You're out of the game!😭"
    }
    messageEl.textContent=message
    sumEl.textContent="sum:-"+sum
}
function newCard(){
    let card =Math.floor( Math.random()*10+1);
    sum+=card
    sumEl.textContent="sum:-"+sum
    renderGame()
    cardsEl.textContent="Cards:"+" "+firstCard+" "+secondCard+" "+card
    sum-=card;
}
