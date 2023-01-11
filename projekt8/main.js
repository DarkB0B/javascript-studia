let canvas = document.getElementById("canvas");
let ammount = document.querySelector("#ammount").value;
let onStart = document.querySelector("#start");
let onReset = document.querySelector("#reset");
let ctx = canvas.getContext("2d");
let ballId = 0;
let balls = [];

canvas.width = window.innerWidth - 20;
canvas.height = window.innerHeight - 70;



function drawBall(ball) {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
    ctx.fillStyle = ball.color;
    ctx.fill();
}
function generateBall(number) {
    for(let i = 0; i < number; i++) {
    let ball = {
        id: ballId,
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        color: "rgb(" + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255 + ")",
        radius: 20,
        speedX: randomSpeed(),
        speedY: randomSpeed(),
        destroyed: false
        
    };
    ballId++;
    balls.push(ball);
    }
}
function moveBall(ball) {
    ball.x += ball.speedX;
    ball.y += ball.speedY;
    if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {

       
        ball.speedX = -ball.speedX;
        
    }
    if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
      
        ball.speedY = -ball.speedY;
        
    }
}
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < balls.length; i++) {
        drawBall(balls[i]);       
        moveBall(balls[i]);
        
    }
    drawLines();
    requestAnimationFrame(draw);
}


function drawLine(ball1, ball2) {
    let distance = Math.sqrt(Math.pow(ball1.x - ball2.x, 2) + Math.pow(ball1.y - ball2.y, 2));
    if (distance < 300) {
        ctx.beginPath();
        ctx.moveTo(ball1.x, ball1.y);
        ctx.lineTo(ball2.x, ball2.y);
        ctx.strokeStyle = "gray";
        ctx.stroke();
    }
}
function drawLines() {
    for (let i = 0; i < balls.length; i++) {
        for (let j = 0; j < balls.length; j++) {
            if (i != j) {
                drawLine(balls[i], balls[j]);
            }
        }
    }
}

function randomSpeed() {
    return Math.round(Math.random()) * 10 - 5;
}

onStart.addEventListener("click", function() {
    generateBall(ammount);
    draw();
});
onReset.addEventListener("click", function() {
    location.reload();
}
);





