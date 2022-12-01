
let container = document.getElementsByClassName("container")[0];
let time = 0;
let holes = [];
let wsysajki = [];
let holeId = 0;
let wsysajkaId = 0;
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
    timeleft = 0;
    wsysajkaId = 0;
    score = 0;
    gameover = false;
    generateBall();
    //generateHole(5);
    generateWsysajka(4);
    moveBall();
    createScoreAndTimer();
    countDown();
}





function generateHole(number){
    for(let i = 0; i < number; i++) {
        let hole = document.createElement("div");
        hole.classList.add("wsysajka");
        hole.id = holeId;
        let randomY = Math.floor(Math.random() * (window.innerHeight - 100));
        let randomX = Math.floor(Math.random() * (window.innerWidth - 100));
        hole.style.top = randomY + "px";
        hole.style.left = randomX + "px";
        hole.style.textAlign = "center";
        hole.style.color = "white";
        hole.style.fontSize = "30px";
        hole.innerHTML = holeId;
        
        while (randomX + 100 > posX && randomX < posX + 100 && randomY + 100 > posY && randomY < posY + 100) {
            let randomY = Math.floor(Math.random() * (window.innerHeight - 100));
            let randomX = Math.floor(Math.random() * (window.innerWidth - 100));
            hole.style.top = randomY + "px";
            hole.style.left = randomX + "px";
        } 
        
        for(let i = 0; i < holes.length; i++) {
            while (randomX + 100 > holes[i].x && randomX < holes[i].x + 100 && randomY + 100 > holes[i].y && randomY < holes[i].y + 100) {
                let randomY = Math.floor(Math.random() * (window.innerHeight - 100));
                let randomX = Math.floor(Math.random() * (window.innerWidth - 100));
                hole.style.top = randomY + "px";
                hole.style.left = randomX + "px";
            }
        }
        container.appendChild(hole);
        console.log("hole has been generated");
        wsysajki.push(hole);
        holeId++;
    }
}
function generateWsysajka(number){
    if(!(number % 2 == 0)) {
        throw new Error("number must be even");
    }
    for(let i = 0; i < number; i++) {
        let hole = document.createElement("div");
        hole.classList.add("wsysajka");
        hole.id = wsysajkaId;
        let randomY = Math.floor(Math.random() * (window.innerHeight - 100));
        let randomX = Math.floor(Math.random() * (window.innerWidth - 100));
        hole.style.top = randomY + "px";
        hole.style.left = randomX + "px";
        hole.style.textAlign = "center";
        hole.value = "true";
        hole.style.backgroundColor = "pink";
        hole.style.color = "white";
        hole.style.fontSize = "30px";
        hole.innerHTML = wsysajkaId;
        
        while (randomX + 100 > posX && randomX < posX + 100 && randomY + 100 > posY && randomY < posY + 100) {
            let randomY = Math.floor(Math.random() * (window.innerHeight - 100));
            let randomX = Math.floor(Math.random() * (window.innerWidth - 100));
            hole.style.top = randomY + "px";
            hole.style.left = randomX + "px";
        } 
        
        for(let i = 0; i < wsysajki.length; i++) {
            while (randomX + 100 > wsysajki[i].x && randomX < wsysajki[i].x + 100 && randomY + 100 > wsysajki[i].y && randomY < wsysajki[i].y + 100) {
                let randomY = Math.floor(Math.random() * (window.innerHeight - 100));
                let randomX = Math.floor(Math.random() * (window.innerWidth - 100));
                hole.style.top = randomY + "px";
                hole.style.left = randomX + "px";
            }
        }
        container.appendChild(hole);
        console.log("wsysajka has been generated");
        wsysajki.push(hole);
        wsysajkaId++;
    }
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
    
        let firstHole = holes[0];
        let firstHoleX = firstHole.offsetLeft;
        let firstHoleY = firstHole.offsetTop;
        let firstHoleSize = firstHole.offsetWidth;
        let ballX = posX;
        let ballY = posY;
        let ballSize = 50;
        if (ballX + ballSize > firstHoleX && ballX < firstHoleX + firstHoleSize && ballY + ballSize > firstHoleY && ballY < firstHoleY + firstHoleSize) {
            console.log("good hit");
            firstHole.remove();
            holes.splice(0, 1);
            score++;
            if(holes.length > 0) {
                generateHole();
                updateScore();
            }
            else {
                gameOver(true);
            }
        } else {
            for (let i = 1; i < holes.length; i++) {
                let hole = holes[i];
                let holeX = hole.offsetLeft;
                let holeY = hole.offsetTop;
                let holeSize = hole.offsetWidth;
                let ballX = posX;
                let ballY = posY;
                let ballSize = 50;
                if (ballX + ballSize > holeX && ballX < holeX + holeSize && ballY + ballSize > holeY && ballY < holeY + holeSize) {
                    console.log("bad hit");
                    gameOver(false);
                }
            }
        }
    
    
}
//check colision with wsysajka
function checkCollisionWsysajka(){
    for (let i = 1; i < wsysajki.length; i++) {
        let hole = wsysajki[i];
        let holeX = hole.offsetLeft;
        let holeY = hole.offsetTop;
        let holeSize = hole.offsetWidth;
        let ballX = posX;
        let ballY = posY;
        let ballSize = 50;
        if ((ballX + ballSize > holeX && ballX < holeX + holeSize && ballY + ballSize > holeY && ballY < holeY + holeSize) && hole.value == "true") {
            console.log("wsysło");
            if( i % 2 == 0) {
                let wypluwajka = wsysajki[i + 1];
                wypluwajka.value = "false";
                hole.value = "false";
                posX = wypluwajka.offsetLeft;
                posY = wypluwajka.offsetTop;
  
                setTimeout(function() {
                    wypluwajka.value = "true";
                    hole.value = "true";
                }, 3000);
            }
            else {
                let wypluwajka = wsysajki[i - 1];
                wypluwajka.value = "false";
                hole.value = "false";
                posX = wypluwajka.offsetLeft;
                posY = wypluwajka.offsetTop;
  
                setTimeout(function() {
                    wypluwajka.value = "true";
                    hole.value = "true";
                }, 3000);
            }
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

function countDown(){
    let countdown = document.getElementById("countdown");
    let downloadTimer = setInterval(function(){
        if(gameover === true){
            clearInterval(downloadTimer);
            countdown.innerHTML = "Finished";
            gameover = true;
            gameOver();
        } else {
            countdown.innerHTML = time + " seconds passed";
        }
        time ++;
    }, 1000);
}
function gameOver(win){
    container.innerHTML = "";
    if(win === false) {
        let gameover = document.createElement("div");
        gameover.id = "gameover";
        gameover.innerHTML = "Game Over";
        gameover.style.fontSize = "50px";
        container.appendChild(gameover);
    }
    else {
        let gameover = document.createElement("div");
        gameover.id = "gameover";
        gameover.innerHTML = "You won!";
        gameover.style.fontSize = "50px";
        container.appendChild(gameover);
    }
    const scoredisplay = document.createElement("div");
    scoredisplay.id = "score";
    scoredisplay.innerHTML = "Score: " + score;
    scoredisplay.style.fontSize = "50px";
    container.appendChild(scoredisplay);
    const timerdisplay = document.createElement("div");
    timerdisplay.id = "timer";
    timerdisplay.innerHTML = "Time: " + time + " seconds";
    timerdisplay.style.fontSize = "50px";
    container.appendChild(timerdisplay);
    const resetButton = document.createElement("button");
    resetButton.id = "reset";
    resetButton.innerHTML = "Reset";
    resetButton.addEventListener("click", reset);
    container.appendChild(resetButton);
}



reset();