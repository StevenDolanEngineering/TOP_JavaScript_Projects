const gameBoard = {
    board: Array.from({ length: 9 }),
};

function createPlayer(name) {
    this.name = name;
};

const startButton = document.getElementById('start-button');
startButton.addEventListener('click', () => {
    const gameContainer = document.getElementById('game-container');
    gameContainer.innerHTML = '';
    
    const newDiv = document.createElement('div');
    newDiv.classList.add('grid-container');

    gameContainer.appendChild(newDiv);
};
