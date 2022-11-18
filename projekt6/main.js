let container = document.getElementsByClassName("container")[0];
let holes = [];
let holeId = 0;
let speedX = 0;
let speedY = 0;
let posX = window.innerHeight/2 + "px";
let posY = window.innerWidth/2 + "px";
let alpha;
let Y;
let X;



window.addEventListener('deviceorientation', (event) => {
     alpha = event.alpha;
     Y = event.beta;
     X = event.gamma;
});


function reset(){
    container.innerHTML = "";
    holes = [];
    holeId = 0;
    posX = window.innerHeight/2 + "px";
    posY = window.innerWidth/2 + "px";
    speedX = 0;
    speedY = 0;
    generateBall();
    generateHole();
}

function moveBall(){
    speedX = X/45;
    speedY = Y/45;
    posX += speedX;
    posY += speedY;
    document.getElementsByClassName("ball")[0].style.left = posX;
    document.getElementsByClassName("ball")[0].style.top = posY;

}    

    
//generate circular div in random position on screen
function generateHole(){
    hole = document.createElement("div");
    hole.classList.add("hole");
    hole.id = holeId;
    let randomX = Math.floor(Math.random() * (window.innerHeight - 100)) + "px";
    let randomY= Math.floor(Math.random() * (window.innerWidth - 100)) + "px";
    while(randomX = window.innerHeight/2){
        randomX = Math.floor(Math.random() * (window.innerHeight - 100)) + "px";
    }
    while(randomY = window.innerWidth/2){
        randomY = Math.floor(Math.random() * (window.innerHeight - 100)) + "px";
    }

    hole.style.top = randomX;
    hole.style.left = randomY;
    container.appendChild(hole);
    holes.push(hole);
    holeId ++;
}



function generateBall(){
    ball = document.createElement("div");
    ball.classList.add("ball");
    ball.style.top = posY;
    ball.style.left = posX;
    ball.style.background = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
    container.appendChild(ball);
}

reset();
window.requestAnimationFrame(moveBall);
  