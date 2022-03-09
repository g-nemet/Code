// CITYSCAPE ASGN START CODE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 300;
cnv.height = 650;

// BLUE BACKGROUND
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, cnv.width, cnv.height);

// DRAW LEFT BUILDING
ctx.fillStyle = "black";
// Building Base
ctx.fillRect(0, 350, 150, 300);
// Middle Section
ctx.fillRect(20, 200, 110, 150);
// Triangle Top
ctx.beginPath();
ctx.moveTo(20, 200);
ctx.lineTo(130, 200);
ctx.lineTo(130, 100);
ctx.fill();

// DRAW RIGHT BUILDING
ctx.fillStyle = "black";
// Building Base
ctx.fillRect(150, 100, 150, 550);
// Medium Top
ctx.fillRect(170, 40, 110, 60);
// Small Top
ctx.fillRect(190, 20, 70, 20);

// DRAW LEFT BUILDING WINDOWS
ctx.fillStyle = "white";
// Left Building Base Windows
let winY = 330;
let win = 1;
while (win <= 6) {
    win += 1;
    winY += 47;
    ctx.fillRect(15, winY, 120, 25);
}
// Left Building Middle Section Windows
let winX = 40;
let winX1 = 40;
let winY2 = 210;
for (let win2 = 1; win2 <= 4; win2 += 1) {
    ctx.fillRect(winX, 210, 10, 10);
    winX += 20;
} for (let win3 = 1; win3 <= 6; win3 +=1) {
    ctx.fillRect(winX1, winY2, 10, 10);
    winY2 += 20;
    winX1 += 20;
}
// DRAW RIGHT BUILDING WINDOWS
// Right Building Windows
let win4 = 1;
let winX2 = 165;
while (win4 <= 5) {
    win4 += 1;
    ctx.fillRect(winX2, 130, 18, 480);
    winX2 += 26;
}
