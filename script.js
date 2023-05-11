const userSelection = document.querySelectorAll('button');

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

let userPoint = 0;
let computerPoint = 0;

userSelection.forEach((select) => {
    select.addEventListener('click', (e) => {
        console.log(userPoint);
        if (userPoint >= 5 || computerPoint >= 5) return;
        const user = e.target.dataset.key;
        const computerSelection = getComputerChoice();
        game(user, computerSelection);
    });
});



const playRound = (playerSelection, computerSelection) => {
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

const game = (userRepsponse, computerSelection) => {
    let wl = playRound(userRepsponse, computerSelection);

    const container = document.querySelector('.results');

    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = '';

    if (wl === 'w') {
        userPoint++;
        console.log(`Winner! You get +1 point. You: ${userPoint} Machine: ${computerPoint}`);
        content.textContent += `Winner! You get +1 point. You: ${userPoint} Machine: ${computerPoint}`
        container.appendChild(content);
    } else if (wl === 'l') {
        computerPoint++;
        console.log(`Loser! Machine gets +1 point. You: ${userPoint} Machine: ${computerPoint}`);
        content.textContent += `Loser! Machine gets +1 point. You: ${userPoint} Machine: ${computerPoint}`
        container.appendChild(content);

    } else if (wl === 't') {
        console.log(`Tie Game! You don't get any points. You: ${userPoint} Machine: ${computerPoint}`);
        content.textContent += `Tie Game! You don't get any points. You: ${userPoint} Machine: ${computerPoint}`
        container.appendChild(content);
    }

    const all = document.querySelectorAll('.results > .content');

    if (userPoint >= 5) {
        alert('You are the final winner!');
        all.forEach(e => {
            e.remove()
        });
        userPoint = 0;
        computerPoint = 0;
    } else if (computerPoint >= 5) {
        alert('Machine is the final winner!');
        all.forEach(e => {
            e.remove()
        });
        userPoint = 0;
        computerPoint = 0;
    }
    
}