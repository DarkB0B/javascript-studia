let container = document.getElementsByClassName("container")[0];
let timeleft = 60;
let holes = [];
let holeId = 0;
let speedX = 0;
let speedY = 0;
let posX = (window.innerHeight/2) - 50;
let posY = (window.innerWidth/2) - 50;
let alpha;
let gameover = false;
let score = 0;


window.addEventListener('deviceorientation', (event) => {
     alpha = event.alpha;
    speedY = event.beta/17;
    speedX = event.gamma/17;
 
});


function reset(){
    container.innerHTML = "";
    
    holes = [];
    holeId = 0;
    posX = (window.innerHeight/2) - 50;
    posY = (window.innerWidth/2) - 50 ;
    speedX = 0;
    speedY = 0;
    timeleft = 60;
    score = 0;
    gameover = false;
    generateBall();
    generateHole();
    moveBall();
    createScoreAndTimer();
    countDown();
}

 

    
//generate circular div in random position on screen
function generateHole(){
    let hole = document.createElement("div");
    hole.classList.add("hole");
    hole.id = holeId;
    let randomY = Math.floor(Math.random() * (window.innerHeight - 100));
    let randomX= Math.floor(Math.random() * (window.innerWidth - 100));
    hole.style.top = randomY + "px";
    hole.style.left = randomX + "px";
    container.appendChild(hole);
    console.log("hole has been generated");
    holes.push(hole);
    holeId ++;
}



function generateBall(){
    const ball = document.createElement("div");
    ball.classList.add("ball");
    ball.id = "ball";
    ball.style.top = posY + "px";
    ball.style.left = posX + "px";
    ball.style.background = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
    container.appendChild(ball);
    console.log("ball has been generated");
}

function moveBall() {


    if (posX + speedX < window.innerWidth - 50 && posX + speedX > 0) {
        posX += speedX;
        ball.style.left = posX + "px";
        
    }
    if (posY + speedY < window.innerHeight - 50 && posY + speedY > 0) {
        posY += speedY;
        ball.style.top = posY + "px";
        
    }
    checkCollision();
    
    window.requestAnimationFrame(moveBall)
    
    
}

function checkCollision(){
    for (let i = 0; i < holes.length; i++){
        let hole = holes[i];
        let holeX = hole.offsetLeft;
        let holeY = hole.offsetTop;
        let holeSize = hole.offsetWidth;
        let ballX = posX;
        let ballY = posY;
        let ballSize = 50;
        if (ballX + ballSize > holeX && ballX < holeX + holeSize && ballY + ballSize > holeY && ballY < holeY + holeSize){
            console.log("collision");
            hole.remove();
            holes.splice(i, 1);
            score ++;
            generateHole();
            updateScore();
        }
    }
}

function createScoreAndTimer(){
    const scoredisplay = document.createElement("div");
    scoredisplay.id = "score";
    scoredisplay.innerHTML = "Score: " + score;
    container.appendChild(scoredisplay);
    const countdown = document.createElement("div");
    countdown.id = "countdown";
    container.appendChild(countdown);
}
function updateScore(){
    let scoreDisplay = document.getElementById("score");
    scoreDisplay.innerHTML = "Score: " + score;    
}
//count 60 seconds and then stop the game
function countDown() {
    
    let downloadTimer = setInterval(function () {
        timeleft--;
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            
            container.innerHTML = "";
            let gameover = document.createElement("div");
            gameover.id = "gameover";
            gameover.innerHTML = "Game Over";
            gameover.style.fontSize = "50px";
            container.appendChild(gameover);
            const scoredisplay = document.createElement("div");
            scoredisplay.id = "score";
            scoredisplay.innerHTML = "Score: " + score;
            scoredisplay.style.fontSize = "50px";
            container.appendChild(scoredisplay);
            //add reset button
            const resetButton = document.createElement("button");
            resetButton.id = "reset";
            resetButton.innerHTML = "Reset";
            resetButton.addEventListener("click", reset);
            container.appendChild(resetButton);
            

        } else {
            document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
        }
    }, 1000);
}
reset();