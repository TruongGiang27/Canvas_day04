let Emoji = document.getElementById('emoji');
let circle = Emoji.getContext("2d");

let velocityX = 100;
let currentTime = Date.now();
let Circle = 70;
let omega = 0.25;

let isEyesChange = false;


setInterval(() => {
    let delta = (Date.now() - currentTime) / 1000
    let fps = 1 / delta;
    currentTime = Date.now();
    circle.clearRect(0, 0, Emoji.width, Emoji.height);
    console.log("FPS " + fps)
  
    //right hear
    circle.beginPath();
    circle.strokeStyle = "black";
    circle.fillStyle = "black";
    circle.arc(110, 40, 20, 0, 2 * Math.PI);
    circle.stroke();
    circle.fill();

    circle.beginPath();
    circle.strokeStyle = "black";
    circle.fillStyle = "grey";
    circle.arc(110, 40, 10, 0, 2 * Math.PI);
    circle.stroke();
    circle.fill();
  
    //left hear
    circle.beginPath();
    circle.strokeStyle = "black";
    circle.fillStyle = "black";
    circle.arc(190, 40, 20, 0, 2 * Math.PI);
    circle.stroke();
    circle.fill();

    circle.beginPath();
    circle.strokeStyle = "black";
    circle.fillStyle = "grey";
    circle.arc(190, 40, 10, 0, 2 * Math.PI);
    circle.stroke();
    circle.fill();

    //head
    circle.beginPath();
    circle.strokeStyle = "black";
    circle.fillStyle = "white";
    circle.arc(150, 75, 50, 0, 2 * Math.PI);
    circle.stroke();
    circle.fill();
    //noise
    circle.beginPath();
     circle.strokeStyle = "black";
     circle.fillStyle = "black";
     circle.arc(150, 75, 7, 0, 2 * Math.PI);
     circle.stroke();
     circle.fill();


     
 

    if (isEyesChange == false) {
        isEyesChange = true
        //left eye
        circle.beginPath();
        circle.strokeStyle = "black";
        circle.fillStyle = "black";
        circle.arc(130, 60, 15, 0, 2 * Math.PI);
        circle.stroke();
        circle.fill();
        
        circle.beginPath();
        circle.strokeStyle = "black";
        circle.fillStyle = "white";
        circle.arc(130, 60, 5, 0, 2 * Math.PI);
        circle.stroke();
        circle.fill();

        //right eye
        circle.beginPath();
        circle.strokeStyle = "black";
        circle.fillStyle = "black";
        circle.arc(170, 60, 15, 0, 2 * Math.PI);
        circle.stroke();
        circle.fill();

        circle.beginPath();
        circle.strokeStyle = "black";
        circle.fillStyle = "white";
        circle.arc(170, 60, 5, 0, 2 * Math.PI);
        circle.stroke();
        circle.fill();

        //mouth
        circle.beginPath();
        circle.strokeStyle = "black";
        circle.fillStyle = "black";
        circle.arc(150, 95,5, 0, 2 * Math.PI);
        circle.stroke();
        circle.fill();
    } else {
        isEyesChange = false;
        

        //left eye
        circle.beginPath();
        circle.strokeStyle = "black";
        circle.fillStyle = "black";
        circle.arc(130, 60, 15, 0, 2 * Math.PI);
        circle.stroke();
        circle.fill();

        circle.beginPath();
        circle.strokeStyle = "black";
        circle.fillStyle = "white";
        circle.arc(130, 60, 5, 0, 2 * Math.PI);
        circle.stroke();
        circle.fill();

        //right eye
        circle.beginPath();
        circle.strokeStyle = "black";
        circle.fillStyle = "white";
        circle.arc(170, 60, 10, 0, 1 * Math.PI);
        circle.stroke();
        circle.fill();
        //mouth 
        circle.beginPath();
        circle.strokeStyle = "black";
        circle.fillStyle = "black";
        circle.arc(150, 84,17, 0, 1 * Math.PI);
        circle.stroke();
        circle.fill();
        circle.beginPath();
        circle.strokeStyle = "black";
        circle.fillStyle = "red";
        circle.arc(150, 85, 15, 0, 1 * Math.PI);
        circle.stroke();
        circle.fill();
    }

    Circle = 150 + 150 * (Math.cos((omega * currentTime) / 1000));
}, 1000);




