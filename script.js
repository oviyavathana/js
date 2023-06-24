
let number = Math.trunc(Math.random()*20)+1;
let score= 20;
document.querySelector(".score").textContent=score;
let highScore = 0;
document.querySelector('.high-score').textContent= highScore;
document.querySelector('.check').addEventListener('click', function(){
const guess = Number(document.querySelector('.guess').value);
if(!guess) {
    document.querySelector('.message').textContent="Please enter a number";
}
else if(guess === number){
    document.querySelector('.message').textContent="Your guess is correct";
    document.querySelector('.number').textContent=number;
    if(score > highScore){
        highScore = score ;
        document.querySelector('.high-score').textContent=highScore;
    }
}
else if(guess > number){

      
    document.querySelector('.message').textContent="Your guess is too high";
    score--;
    document.querySelector('.score').textContent = score;
}
else if(guess < number){
    document.querySelector('.message').textContent="Your guess is too loww";
    score--;
      document.querySelector('.score').textContent = score;

}
}

);
document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    highScore=0 ;
    number = Math.trunc(Math.random()*20)+1;
    document.querySelector('.score').textContent=score;
    document.querySelector('.message').textContent="Start Guessing";
    document.querySelector('.guess').value= "";
});
