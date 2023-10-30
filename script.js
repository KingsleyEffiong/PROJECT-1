

'use strict'; 
let  score = 20;
const btnClick = document.querySelector(".check");
let secretNumber = Math.trunc(Math.random()*20) +1; 
const btnClickAgain = document.querySelector(".again");
let highscore = 0;
const displayMessage = function(message){
    document.querySelector(".message").textContent = message;

}
btnClick.addEventListener("click", function(){
    let guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);
    if(!guess){
        // document.querySelector(".message").textContent = 'No Number';  
        displayMessage("No Number");
    }else if(guess === secretNumber){
        // document.querySelector(".message").textContent = 'Correct Number'; 
        displayMessage("Correct Number");
        document.querySelector(".number").textContent = secretNumber + '%'; 
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';

        if(score > highscore){
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
    }else if(guess!== secretNumber){
        if(score > 1){
            // document.querySelector(".message").textContent =guess > secretNumber ? 'Guess is Higher than secret number; ': 'Guess is less than secret number';
            displayMessage(guess > secretNumber ? '🤷‍♀️Guess is Higher than secret number; ': '🤦‍♂️Guess is less than secret number');
            score--;
            document.querySelector(".score").textContent = score; 
        }else{
            // document.querySelector(".message").textContent = 'You have loosed the game'; 
            displayMessage('You have loosed the game');
            document.querySelector(".score").textContent = 0; 
        }
      
    }
})
btnClickAgain.addEventListener("click", function(){
   score = 20;
   secretNumber = Math.trunc(Math.random()*20) +1;
//    document.querySelector(".message").textContent = 'Start guessing...'; 
   displayMessage('Start guessing...')
   document.querySelector(".score").textContent = 20;  
   document.querySelector(".number").textContent = '?';
   document.querySelector(".guess").value = ''
   document.querySelector("body").style.backgroundColor = '#222'
   document.querySelector('.number').style.width = '15rem';
})





