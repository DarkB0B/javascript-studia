let container = document.getElementsByClassName("container")[0];
let holes = [];
let holeId = 0;
let speedX = 0;
let speedY = 0;
let posX = window.innerHeight/2 + "px";
let posY = window.innerWidth/2 + "px";
let alpha;
let Y = 0;
let X = 0;



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

 

    
//generate circular div in random position on screen
function generateHole(){
    let hole = document.createElement("div");
    hole.classList.add("hole");
    hole.id = holeId;
    let randomX = Math.floor(Math.random() * (window.innerHeight - 100)) + "px";
    let randomY= Math.floor(Math.random() * (window.innerWidth - 100)) + "px";
    

    hole.style.top = randomY;
    hole.style.left = randomX;
    container.appendChild(hole);
    console.log("hole has been generated");
    holes.push(hole);
    holeId ++;
}



function generateBall(){
    ball = document.createElement("div");
    ball.classList.add("ball");
    ball.id = "ball";
    ball.style.top = posX;
    ball.style.left = posY;
    ball.style.background = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
    container.appendChild(ball);
    console.log("ball has been generated");
}

reset();


//function running every 333ms
setInterval(function(){
    speedX = X/45;
    speedY = Y/45;
    posX += speedX;
    posY += speedY;
    document.getElementById("ball").style.left = posX;
    document.getElementById("ball").style.top = posY;
    console.log("ball has been moved");
},333);