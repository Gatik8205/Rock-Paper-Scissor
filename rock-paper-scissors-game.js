let score=JSON.parse(localStorage.getItem('score'))||{
    wins:0,
    losses:0,
    ties:0
};
// below code is the logic behind the code written in let score
// if(!score){
//     score={
//         wins:0,
//         losses:0,
//         ties:0
//     };
// }

updateScoreElement();

function playGame(playerMove){
const computerMove=pickComputerMove();
let result='';
if(playerMove==='Rock'){
    if(computerMove==='Rock'){
        result='Tie';
    } else if(computerMove==='Paper'){
        result='Lose';
    }else if(computerMove==='Scissors'){
        result='Win';
    }
} else if(playerMove==='Paper'){
    if(computerMove==='Rock'){
        result='Lose';
    } else if(computerMove==='Paper'){
        result='Tie';
    }else if(computerMove==='Scissors'){
        result='Lose';
    }
}else if(playerMove==='Scissors'){
    if(computerMove==='Rock'){
        result='Lose';
    } else if(computerMove==='Paper'){
        result='Win';
    }else if(computerMove==='Scissors'){
        result='Tie';
    }
}
if(result==='Win'){
    score.wins+=1;
}else if(result==='Lose'){
    score.losses+=1;
}else if(result==='Tie'){
    score.ties+=1;
}

localStorage.setItem('score',JSON.stringify(score));

updateScoreElement();

document.querySelector('.js-result')
    .innerHTML=result;

document.querySelector('.js-move')
    .innerHTML=`You  <img class="move-icon" src="/Project/Rock-Paper_Scissors/${playerMove}-emoji.png"> 
        Computer<img class="move-icon" src="/Project/Rock-Paper_Scissors/${computerMove}-emoji.png">`;
}
function updateScoreElement(){
document.querySelector('.js-score')
.innerHTML=`Wins:${score.wins},Losses:${score.losses},Ties:${score.ties}.`;
}
function pickComputerMove(){
const randomNumber=Math.random();
let computerMove='';
if(randomNumber>=0 && randomNumber < 1/3){
    computerMove='Rock';
} else if(randomNumber >=1/3 && randomNumber < 2/3){
    computerMove='Paper';
} else if(randomNumber >=2/3 && randomNumber <1){
    computerMove='Scissors';
}
return computerMove;
}