

resultElement = document.querySelector('.js-result');
movesElement = document.querySelector('.js-moves');
scoreElement = document.querySelector('.js-score');

let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    loses: 0,
    ties: 0
    
};

resultElement.innerHTML = `Result`;
scoreElement.innerHTML = `Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`;

function reset() {
    
    score.wins = 0, 
    score.loses = 0, 
    score.ties = 0
    localStorage.removeItem('score')
    scoreElement.innerHTML = `Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`;
    resultElement.innerHTML = `Result`;
    movesElement.innerHTML = `You 
    <img src="images/${playerMove}-emoji.png" > 
    <img src="images/${computerMove}-emoji.png"> 
    computer `;
}


function mainGame(playerMove) {

    const computerMove = pickComputermove();
    
    let result = '';

    if(playerMove === 'rock') {

        if(computerMove === 'rock') {
            result = 'Tied';
            } else if(computerMove === 'paper') {
            result = 'You Lose'; 
            } else if(computerMove === 'Scissors') {
            result = 'You Won'; 
            }

    } else if(playerMove === 'paper') {

        if(computerMove === 'rock') {
            result = 'You Won';
            } else if(computerMove === 'paper') {
            result = 'Tied'; 
            } else if(computerMove === 'Scissors') {
            result = 'You Lose'; 
            }
    } else if(playerMove === 'Scissors') {

        if(computerMove === 'rock') {
            result = 'You Lose';
            } else if(computerMove === 'paper') {
            result = 'You Won'; 
            } else if(computerMove === 'scissors') {
            result = 'Tied'; 
            }
    }

    

    if(result === 'You Won') { 
        score.wins += 1;
    } else if(result === 'You Lose') {
        score.loses += 1;
    } else if(result === 'Tied') {
        score.ties += 1;
    }

 

    resultElement.innerHTML = `${result}`;
    movesElement.innerHTML = `You 
    <img src="images/${playerMove}-emoji.png" class= 'move-icon'> 
    <img src="images/${computerMove}-emoji.png" class= 'move-icon' > 
    computer`;
    scoreElement.innerHTML = `Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`;
    

    localStorage.setItem('score', JSON.stringify(score));
    
    console.log(score);
}

function pickComputermove() {

    let computerMove = '';
    const randomNumber = Math.random();

    if(randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'paper'; 
    } else if(randomNumber >= 2/3 && randomNumber <= 3/3) {
    computerMove = 'Scissors'; 
    }

    return computerMove;

} 