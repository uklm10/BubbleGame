// EVENT BUBLING CONCEPT  - jispe click karoge wo element par event raise hoga, aur event listner na milne par event ke parent par listener dhundhega, waha bhi na milne par event ke parent ke parent ke parent par listner dhundega

// var timer = 15;
// var score = 0;
// var hitrn = 0;

// function increseScore(){
//     score+=10;
//     document.querySelector('#scoreval').textContent= score;
// }

// function getNewHit(){
//      hitrn = Math.floor(Math.random()*10);
//     document.querySelector("#hitval").textContent= hitrn;
// }

// function makeBubble() {
//     var clutter = " ";
//     for (var i = 0; i <= 101; i++) {
//         var rn = Math.floor(Math.random() * 10);
//         clutter += `<div class="bubble">${rn}</div>`;
//     }

//     document.querySelector("#pbtm").innerHTML = clutter;

// }

// function runTimer() {
//     var timerint = setInterval(function () {
//         if (timer > 0) {
//             timer--;
//             document.querySelector("#timerval").textContent = timer;
//         } else {
//             clearInterval(timerint);
//             document.querySelector("#pbtm").innerHTML = `<h1> Game Over, <br> your score is ${score} </h1> `;
//         }
//     }, 1000);
// }


// document.querySelector("#pbtm")
// .addEventListener("click",function(details){
//     var clickednum = Number(details.target.textContent);
//     if(clickednum === hitrn){
//         increseScore();
//         makeBubble();
//         getNewHit();
//     }
// })

// getNewHit();
// runTimer();
// makeBubble();
// increseScore();

var rect = document.querySelector("#pbtm");

var timer = 50;
var score = 0;
var hitrn = 0;

function increaseScore() {
    score += 10;
    document.querySelector('#scoreval').textContent = score;
}

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble() {
    var panel = document.querySelector("#pbtm");
    var rectangleLocation = panel.getBoundingClientRect();
    var area = rectangleLocation.width * rectangleLocation.height;
    var bubbleSize = 80; // Adjust the bubble size as needed
    var maxBubbles = Math.floor(area / (bubbleSize * bubbleSize));

    var clutter = " ";
    for (var i = 0; i < maxBubbles; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}



function runTimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1> Game Over, <br> your score is ${score} </h1> `;
        }
    }, 1000);
}

document.querySelector("#pbtm")
    .addEventListener("click", function (details) {
        var clickednum = Number(details.target.textContent);
        if (clickednum === hitrn) {
            increaseScore();
            makeBubble();
            getNewHit();
        }
    });

getNewHit();
runTimer();
makeBubble();

// Update the number of bubbles when the window is resized
window.addEventListener("resize", function () {
    makeBubble();
});

