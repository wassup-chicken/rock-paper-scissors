const getComputerChoice = () => {
    let cRps = Math.floor(Math.random() * 3) + 1;

    let comp;
    switch (cRps) {
        case 1:
            comp = 'rock';
            break;
        case 2:
            comp = 'paper';
            break;
        case 3:
            comp = 'scissors'
            break;
    }
    return comp;
}
const computerSelection = getComputerChoice();

let userPoint = 0;
let computerPoint = 0;

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
        alert('Invalid Response, please choose Rock, Paper, or Scissors');
        game();
    }

    let log;
    switch (playerSelection) {
        
        case 'rock':
            if (computerSelection === 'paper') log = 'l'
            if (computerSelection === 'scissors') log = 'w'
            if (computerSelection === 'rock') log = 't'
            break;
        case 'paper':
            if (computerSelection === 'rock') log = 'w'
            if (computerSelection === 'scissors') log = 'l';
            if (computerSelection === 'paper') log = 't'
            break;
        case 'scissors':
            if (computerSelection === 'rock') log = 'l'
            if (computerSelection === 'paper') log = 'w'
            if (computerSelection === 'scissors') log = 't'

            break;
    }
    return log;
}

const game = () => {
    const userResponse = prompt('RPS?');

    const userSelection = userResponse.toLowerCase();

    let wl = playRound(userSelection, computerSelection);

    if (wl === 'w') {
        userPoint++;
        alert(`Winner! You get +1 point. You: ${userPoint} Machine: ${computerPoint}`)
    } else if (wl === 'l') {
        computerPoint++;
        alert(`Loser! Machine gets +1 point. You: ${userPoint} Machine: ${computerPoint}`)
    } else if (wl === 't') {
        alert(`Tie Game! You don't get any points. You: ${userPoint} Machine: ${computerPoint}`);
    }

    if (userPoint >= 5) {
        alert(`You're the final winner!`);
    } else if (computerPoint >= 5) {
        alert(`Machine is the final winner!`);
    }
}


while (userPoint < 5 && computerPoint < 5) {
    game();
}


