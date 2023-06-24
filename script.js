'use strict';
let number = Math.trunc(Math.random()*20)+1;
let score= 20;
document.querySelector(".score").textContent=score;
let highScore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent=message;
}

const displayScore = function(score){
    document.querySelector('.score').textContent=score;
}
const displayHighScore = function(highScore){
    document.querySelector('.high-score').textContent=highScore;
}

displayHighScore(highScore)
document.querySelector('.check').addEventListener('click', function(){
const guess = Number(document.querySelector('.guess').value);

if(!guess) {
    displayMessage("Please enter a number");
}
else if(guess === number){
    displayMessage("YAY, Its right");
    displayScore(score);
    document.querySelector(".number").textContent=number;
    document.querySelector('body').style.backgroundColor = "#00FF00";
    if(score > highScore){
        highScore = score;
        displayHighScore(highScore)
    }
}
else if(guess != number) {
    if(score > 1) {
        displayMessage(guess < number ? 'Too low' : 'Too high');
        score--;
        displayScore(score);
    }else{
        displayMessage("You Lost");
        document.querySelector('body').style.backgroundColor= "#FF0000";
    }
}
}
);
document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    highScore= 0;
    number = Math.trunc(Math.random()*20)+1;
    displayScore(score);
    displayMessage("Start Guessing");
    document.querySelector('.guess').value= "";
});
