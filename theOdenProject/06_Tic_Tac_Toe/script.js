//gameboard module using IIFE
const Gameboard = (() => {
    let board = ["", "", "", "", "", "", "", "", ""];

    const getBoard = () => board;

    const resetBoard = () => {
        board = ["", "", "", "", "", "", "", "", ""];
    };

    const setCell = (index, marker) => {
        if (board[index] === "") {
            board[index] = marker;
        };
    };

    const isFull = () => {
        for (let i = 0; i < board.length; i++) {
            if (board[i] === "") {
                return false;
            }
        }
        return true;
    }

    return {
        getBoard,
        resetBoard,
        setCell,
        isFull
    }

})();

//Player factory
function Player(name, marker) {
    return {name, marker};
}

//game controller module
const gameController = (() => {
    let players = [];
    let currentPlayerIndex = 0;
    let isGameOver = false;

    function init(player1, player2) {
        players = [Player(player1, "X"), Player(player2, "O")];
        currentPlayerIndex = 0;
        isGameOver = false;

        Gameboard.resetBoard();
        DisplayController.render();
        DisplayController.setStatusMessage(`${players[0].name}'s turn`)
    };

    const handleClick = (index) => {
        if (Gameboard.getBoard()[index] == "" && !isGameOver) {
            Gameboard.setCell(index, players[currentPlayerIndex].marker);
            DisplayController.render();

            if (checkWinner()) {
                DisplayController.setStatusMessage(`${players[currentPlayerIndex].name} wins!`);
                isGameOver = true;
            } else if (Gameboard.isFull()) {
                DisplayController.setStatusMessage(`It's a tie`);
                isGameOver = true
            } else {
                currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
                DisplayController.setStatusMessage(`${players[currentPlayerIndex].name}'s turn`);
            }
        }
    }

    const checkWinner = () => {
        const winnCom = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        return winnCom.some(combo => 
            Gameboard.getBoard()[combo[0]] === players[currentPlayerIndex].marker &&
            Gameboard.getBoard()[combo[1]] === players[currentPlayerIndex].marker &&
            Gameboard.getBoard()[combo[2]] === players[currentPlayerIndex].marker
          );
    }

    return {
        init,
        handleClick
    }

})();

//display controller
const DisplayController = (() => {
    const gameBoardDiv = document.querySelector("#gameboard");
    const statusDiv = document.querySelector("#status");
    const restartBtn = document.querySelector("#restartGame");

    const render = () => {
        gameBoardDiv.innerHTML = "";

        const gameboardArray = Gameboard.getBoard();

        for (let i = 0; i < gameboardArray.length; i++) {
            const cell = gameboardArray[i];
            const cellDiv = document.createElement("div");
            cellDiv.textContent = cell;

            cellDiv.addEventListener("click", () => {
                gameController.handleClick(i);
            });
            gameBoardDiv.appendChild(cellDiv);
        }
    }

    const setStatusMessage = (message) => {
        statusDiv.textContent = message;
    }

    restartBtn.addEventListener("click", () => {
        gameController.init("Player 1", "Player 2");
    });

    return {
        render,
        setStatusMessage
    }

})();

gameController.init("Player 1", "Player 2");

