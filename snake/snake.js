const SNAKE_SPEED = 5;


const drawSnake = (gameBoard) => {
    for (let i = 0; i < snakeBody.length; i++){
        const segment = snakeBody[i];
        const snakeElement = documnet.createElement("div");
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add("snake");
        gameBoard.appendChild(snakeElement);
    }
}