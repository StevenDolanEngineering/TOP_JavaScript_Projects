const gameBoard = (() => {
    let board = Array(9).fill("");

    const getBoard = () => board;

    const placeMarker = (index, marker) => {
        if (board[index] === "") {
            board[index] = marker;
            return true;
        }
        return false;
    };

    const resetBoard = () => {
        board = Array(9).fill("");
    };
    
    return { getBoard, placeMarker, resetBoard };
})();

function createPlayers(name, marker) {
    const getName = () => name;
    const getMarker = () => marker;

    return { getName, getMarker };
};

const startButton = document.getElementById('start-button');
startButton.addEventListener('click', () => {
    const gameContainer = document.getElementById('game-container');
    gameContainer.innerHTML = '';
    
    const newDiv = document.createElement('div');
    newDiv.classList.add('grid-container');

    gameContainer.appendChild(newDiv);
};


