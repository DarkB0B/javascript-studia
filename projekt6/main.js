let container = document.getElementsByClassName("container")[0];
let holes = [];
let holeId = 0;
let speedX = 0;
let speedY = 0;
let posX = window.innerHeight/2;
let posY = window.innerWidth/2;
let alpha;




window.addEventListener('deviceorientation', (event) => {
     alpha = event.alpha;
    speedY = event.beta/17;
    speedX = event.gamma/17;
 
});


function reset(){
    container.innerHTML = "";
    holes = [];
    holeId = 0;
    posX = window.innerHeight/2;
    posY = window.innerWidth/2;
    speedX = 0;
    speedY = 0;
    generateBall();
    generateHole();
    moveBall();
}

 

    
//generate circular div in random position on screen
function generateHole(){
    let hole = document.createElement("div");
    hole.classList.add("hole");
    hole.id = holeId;
    let randomX = Math.floor(Math.random() * (window.innerHeight - 100));
    let randomY= Math.floor(Math.random() * (window.innerWidth - 100));
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

reset();

function moveBall() {


    if (posX + speedX < window.innerWidth - 50 && posX + speedX > 0) {
        posX += speedX;
        ball.style.left = posX + "px";
    }
    if (posY + speedY < window.innerHeight - 50 && posY + speedY > 0) {
        posY += speedY;
        ball.style.top = posY + "px";
    }

    
    window.requestAnimationFrame(moveBall)
    
}