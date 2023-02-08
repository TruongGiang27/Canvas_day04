let canvas = document.getElementById('canvas');
let context = canvas.getContext("2d")

let velocityX = 100;
let currentTime = Date.now();
let Circle = 70;
let omega = 1;

setInterval(() => {
    let delta =(Date.now()- currentTime)/1000
    let fps = 1/delta;
    currentTime= Date.now();
    context.clearRect(0, 0,canvas.width, canvas.height);
    console.log("FPS "+fps)


    context.beginPath();
    context.strokeStyle = "red";
    context.fillStyle = "blue";
    context.arc(Circle, 70, 20, 0, 2 * Math.PI);
    context.stroke();
    context.fill();
    context.beginPath();
    context.strokeStyle = "white";
    context.fillStyle = "red";
    context.arc(Circle, 70, 10, 0, 2 * Math.PI);
    context.stroke();
    context.fill();
    
    // Circle += 10*delta;
    Circle = 150 + 150  * (Math.cos((omega*currentTime)/1000));
},1000/60);
