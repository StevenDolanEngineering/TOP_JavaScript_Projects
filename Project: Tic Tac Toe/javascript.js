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

function createPlayer(name, marker) {
    const getName = () => name;
    const getMarker = () => marker;

    return { getName, getMarker };
};

const gameController = (() => {
    const player1 = createPlayer("Player 1", "X");
    const player2 = createPlayer("Player 2", "O");

    let activePlayer = player1;
    let gameOver = false;

    const getActivePlayer = () => activePlayer;

    const switchPlayer = () => {
        if (activePlayer === player1) {
            activePlayer = player2;
        } else {
            activePlayer = player1;
        }
    };

    const playRound = (index) => {
        if (gameOver) return;

        const round = gameBoard.placeMarker(index, activePlayer.getMarker());
        if (round === true) {
            if (checkWin()) return;
            switchPlayer();
        }
        else {
            alert("Please pick a different square");
        }
    };

    const winningCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7],
        [2, 5, 8], [0, 4, 8], [2, 4, 6]];

    const checkWin = () => {
        const board = gameBoard.getBoard();
        const marker = activePlayer.getMarker();

        const hasWon = winningCombinations.some((combination) => {
            return (
                board[combination[0]] === marker &&
                board[combination[1]] === marker &&
                board[combination[2]] === marker
            );
        });

        if (hasWon) {
            alert(`${activePlayer.getName()} is the winner!`);
            gameOver = true;
            return true;
        } else if (!board.includes("")) {
            alert("It is a tie!");
            gameOver = true;
            return true;
        }
        return false;
    };

    const resetGame = () => {
        gameBoard.resetBoard();
        activePlayer = player1;
        gameOver = false;
    };

    return { getActivePlayer, switchPlayer, playRound, resetGame };
})();



const displayController = (() => {
    const startButton = document.getElementById('start-button');
    
    const renderBoard = () => {
        const gameContainer = document.getElementById('game-container');
        gameContainer.innerHTML = '';
    
        const newDiv = document.createElement('div');
        newDiv.classList.add('grid-container');

        const board = gameBoard.getBoard();        
        board.forEach((cell, index) => {
            const newCell = document.createElement('div');
            newCell.classList.add('grid-cell');
            newCell.innerHTML = cell;

            newCell.addEventListener('click', () => {
                gameController.playRound(index);
                renderBoard();
            });

            newDiv.appendChild(newCell);
        });

        gameContainer.appendChild(newDiv);        
    };

    startButton.addEventListener('click', () => {
        gameController.resetGame();
        renderBoard();
    });    

    return { renderBoard }
})();
