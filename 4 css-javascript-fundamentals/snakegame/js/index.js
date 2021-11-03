const startBtn = document.querySelector("#start");
const scoreDisplay = document.querySelector("#score");
const highScoreDisplay = document.getElementById("high-score");
const grid = document.querySelector(".grid");
const foodSound = new Audio("../music/food.mp3");
const gameOverSound = new Audio("../music/gameOver.mp3");
const moveSound = new Audio("../music/move.mp3");
const music = new Audio("../music/music.mp3");
const speed = 0.9;

let squares = [];
let currentSnake = [2, 1, 0];
let appleIndex = 0;
let direction = 1;
let width = 10;
let score = 0;
let highScore = JSON.parse(localStorage.getItem("highScore"));
let timerId = 0;
let intervalTime = 500;

if (highScore === "null") highScore = 0;
highScoreDisplay.textContent = highScore;

document.addEventListener("keyup", control);

startBtn.addEventListener("click", startGame);

makeSquares();
generateApple();
makeSnake();

function startGame() {
    clearInterval(timerId);
    music.currentTime = 0;
    music.play();

    // remove the snake
    squares[currentSnake[0]].classList.remove("snake-head");
    currentSnake.forEach((index) => squares[index].classList.remove("snake"));

    // remove the apple
    squares[appleIndex].classList.remove("apple");

    currentSnake = [2, 1, 0];
    makeSnake();
    generateApple();
    direction = 1;
    score = 0;
    scoreDisplay.textContent = score;
    highScoreDisplay.textContent = highScore;
    intervalTime = 500;
    timerId = setInterval(move, intervalTime);
}

function makeSquares() {
    for (let i = 0; i < 100; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        grid.appendChild(square);
        squares.push(square);
    }
}

function makeSnake() {
    squares[currentSnake[0]].classList.add("snake-head");
    currentSnake.forEach((index) => squares[index].classList.add("snake"));
}

function move() {
    if (
        (currentSnake[0] - width < 0 && direction === -width) ||
        (currentSnake[0] % width === width - 1 && direction === 1) ||
        (currentSnake[0] + width >= width * width && direction === width) ||
        (currentSnake[0] % width === 0 && direction === -1) ||
        squares[currentSnake[0] + direction].classList.contains("snake")
    ) {
        gameOverSound.play();
        music.pause();
        return clearInterval(timerId);
    }

    let tail = currentSnake.pop();
    squares[tail].classList.remove("snake");
    currentSnake.unshift(currentSnake[0] + direction);

    if (squares[currentSnake[0]].classList.contains("apple")) {
        squares[appleIndex].classList.remove("apple");
        foodSound.play();
        currentSnake.push(tail);
        squares[tail].classList.add("snake");
        generateApple();
        score++;
        scoreDisplay.textContent = score;

        if (score > highScore) {
            highScore = score;
            highScoreDisplay.textContent = highScore;
            localStorage.setItem("highScore", JSON.stringify(highScore));
        }

        if (score > 9 && score % 10 === 0) {
            clearInterval(timerId);
            intervalTime *= speed;
            timerId = setInterval(move, intervalTime);
        }
    }

    squares[currentSnake[1]].classList.remove("snake-head");
    squares[currentSnake[1]].classList.add("snake");
    squares[currentSnake[0]].classList.add("snake-head");
    moveSound.play();
}

function control(e) {
    switch (e.key) {
        case "ArrowUp":
            direction = -width;
            break;
        case "ArrowRight":
            direction = 1;
            break;
        case "ArrowDown":
            direction = width;
            break;
        case "ArrowLeft":
            direction = -1;
            break;
        case "Escape":
            startGame();
            break;
    }
}

function generateApple() {
    do {
        appleIndex = Math.floor(Math.random() * squares.length);
    } while (
        squares[appleIndex].classList.contains("snake") ||
        squares[appleIndex].classList.contains("snake-head")
    );

    squares[appleIndex].classList.add("apple");
}
