// const canvas = document.querySelector('canvas');
// const ctx = canvas.getContext("2d");
// canvas.width = 800;
// canvas.height = 800;

// ctx.rect(50, 50, 50, 50);
// ctx.rect(100, 100, 50, 50);
// ctx.rect(150, 150, 50, 50);
// ctx.fill();

// ctx.beginPath();
// ctx.rect(200, 200, 50, 50);
// ctx.rect(250, 250, 50, 50);
// ctx.fillStyle = "red";
// setTimeout(()=> {ctx.fill()}, 1000);

// ctx.moveTo(50, 50);
// ctx.lineTo(150, 50);
// ctx.lineTo(150, 150);
// ctx.lineTo(50, 150);
// ctx.lineTo(50, 50);
// ctx.stroke();
// ctx.fill();

// 1.4 집 그리기
// ctx.fillRect(200, 200, 20, 200);
// ctx.fillRect(500, 200, 20, 200);
// ctx.lineWidth = 3;
// ctx.strokeRect(280, 280, 70, 120);
// ctx.fillRect(200, 200, 300, 20);
// ctx.moveTo(200, 200);
// ctx.lineTo(360, 90);
// ctx.lineTo(520, 200);
// ctx.fill();
// ctx.beginPath();

// ctx.arc(295, 340, 5, 0, 2 * Math.PI);
// ctx.fillStyle = "pink";
// ctx.fill();

//1.5 사람만들기
//몸
// ctx.fillRect(230, 200, 15, 100);
// ctx.fillRect(330, 200, 15, 100);
// ctx.fillRect(260, 200, 60, 200);

// //얼굴
// ctx.arc(290, 150, 50, 0, 2 * Math.PI);
// ctx.fill();

// ctx.beginPath();
// ctx.fillStyle = "#fff";
// ctx.arc(260, 150, 7, Math.PI, 2 * Math.PI);
// ctx.arc(310, 150, 7, Math.PI, 2 * Math.PI);
// ctx.fill();

//1.6 선 그리기>>보드 클릭마다 선 그리기
// const canvas = document.querySelector('canvas');
// const ctx = canvas.getContext("2d");
// canvas.width = 800;
// canvas.height = 800;
// ctx.lineWidth = 2;
// const colors = [
//     "red",
//     "orange",
//     "yellow",
//     "green",
//     "blue",
//     "purple",
//     "pink"
// ];
// function onClick(event){
//     ctx.beginPath();
//     ctx.moveTo(300, 300);
//     const color = colors[Math.floor(Math.random()*colors.length)];
//     ctx.strokeStyle = color;
//     ctx.lineTo(event.offsetX, event.offsetY);
//     ctx.stroke();
// }
// canvas.addEventListener("mousemove", onClick);

//1.7 클릭하고 놓을때까지 
const color = document.getElementById("color");
const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = lineWidth.value;
let isPainting = false;
function onMove(event){
    if(isPainting){
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        return;
    }
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
}
function onDown(){
    isPainting = true; //마우스로 누르고 있을 때 
}
function onUp(){
    isPainting = false; //마우스를 뗐을 때
}
function onLineChange(event){
    ctx.lineWidth = event.target.value;
}
function onLineColor(event){
    ctx.strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;
}
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", onDown);
canvas.addEventListener("mouseup", onUp);
canvas.addEventListener("mouseleave", onUp);
lineWidth.addEventListener("change", onLineChange);
color.addEventListener("change", onLineColor);

//#2.4