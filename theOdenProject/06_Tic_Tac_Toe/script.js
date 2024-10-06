//Gameboard module
const gameBoard = (() => {
    let board = ["", "", "", "", "", "", "", "",""];
    const setField = (index, symbol) => {
        if (board[index] == "") {
            board[index] = symbol;
        }
    };

    const getField = (index) => {
        board[index];
    };

    const reset = () => {
        board = ["", "", "", "", "", "", "", "",""];
    };

    const getBoard = () => board;

    return [setField, getField, reset, getBoard];
})();

//player factory
const Player = (name, marker) => {
    const getName = () => name;
    const getMarker = () => marker;
    return {getName, getMarker};
};

//game controller module
const gameController = (() => {
    let players = [];
    let currentPlayerIndex = 0;
    let gameOver = false;

    const startGame = (player1, player2) => {
        players = [Player(player1, "X"), Player(player2, "O")];
        currentPlayerIndex = 0;
        gameOver = false;
        gameBoard.reset();
        displayController.render();
    };

    
})