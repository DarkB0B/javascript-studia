let container = document.getElementsByClassName("container")[0];
let holes = [];
let holeId = 0;

generateBall();
generateHole();


    
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
    ball.style.top = window.innerHeight/2 + "px";
    ball.style.left = window.innerWidth/2 + "px";
    ball.style.background = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
    container.appendChild(ball);
}



  