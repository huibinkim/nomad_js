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

//1.7 클릭하고 놓을때까지 //#2.5 색 채우기 //#3.1 text추가버튼 넣기
const saveBtn = document.getElementById("save-img");
const textInput = document.getElementById("text");
const fileInput = document.getElementById("fileInput");
const eraserBtn = document.getElementById("erase-btn");
const modeBtn = document.getElementById("mode-btn");
const reBtn = document.getElementById("re-btn");

const colorOptions = Array.from(document.getElementsByClassName("color-option"));
// console.log(colorOptions);
const color = document.getElementById("color");
const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 400;
ctx.lineWidth = lineWidth.value;
ctx.lineCap = "round";
let isPainting = false;
let isFilling = false;

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
    // ctx.fill(); 마우스를 뗏을 때 모양이 만들어짐.
    // ctx.beginPath();
}
function onLineChange(event){
    ctx.lineWidth = event.target.value;
}
function onLineColor(event){
    ctx.strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;
}
function onColorClick(event){
    const colorValue = event.target.dataset.color;
    ctx.strokeStyle = colorValue;
    ctx.fillStyle = colorValue;
    color.value = colorValue;
}
function onModeClick(){
    if(isFilling){
        isFilling = false;
        modeBtn.innerText = "Fill";
    }else{
        isFilling = true;
        modeBtn.innerText = "Draw";
    }
}
function onClick(){
    if(isFilling){
        ctx.fillRect(0, 0, 400, 400);
    }
}
function onReStart(){
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, 400, 400);
}
function onEraser(){
    ctx.strokeStyle = "#fff";
    isFilling = false;
    modeBtn.innerText = "Fill";
}
//image 선택하여 가져와서 그림판에 사이즈맞게 올리기
function onFileChange(event){
    const file = event.target.files[0]; //파일가져오기
    const url = URL.createObjectURL(file); //파일의 url 가져오기
    const image = new Image(); //img생성
    image.src = url;
    image.onload = function(){
        ctx.drawImage(image,0,0, 400, 400);
        fileInput.value = null;
    };
}
//canvas를 더블클릭하면
function onDoubleClick(event){
    const text = textInput.value;
    //글씨의 기본굵기가 5로 되어있어서 글씨가 안보임 그래서 text를 넣기 전에 lineWidth값을 변경해준다.
    if(text !== ""){
        ctx.save(); //현재 ctx의 상태를 모두 저장할 함수.
        ctx.lineWidth = 1; 
        ctx.font = "48px system-ui";
        ctx.fillText(text, event.offsetX, event.offsetY);
        ctx.restore(); //저장 전으로 돌아가므로 그 사이의 변경된 사항은 저장되지 않는다. 기존의 체크포인트로 돌아간다.
    }
}

//click하면 폰트 이름 변경
function changeValue(){
    const selectBtn = document.getElementById("font-select");
    let selectValue = selectBtn.options[selectBtn.selectedIndex].value;
    console.log(selectValue);
    // const optionValue = target.options[target.selectedIndex].innerText; //font-family
    
    // ctx.font = "48px, optionValue"
    // console.log(ctx.font)
}   


function onSaveImg(event){
    const url = canvas.toDataURL();  //canvas의 url을 생성
    const a = document.createElement("a"); //a링크를 생성
    console.log(url);
    console.log(a);
    a.href = url; //a 링크의 href를 canvas url로 변경
    a.download = "myDrawing.png"; //a 링크 다운로드 이름 변경
    a.click(); //a 링크 클릭하면 실행
}

// canvas.onmousemove = function()
canvas.addEventListener("dblclick", onDoubleClick);
canvas.addEventListener("click", onClick);
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", onDown);
canvas.addEventListener("mouseup", onUp);
canvas.addEventListener("mouseleave", onUp);
lineWidth.addEventListener("change", onLineChange);
color.addEventListener("change", onLineColor);

// selectBtn.forEach((option) => option.addEventListener("click", changeValue));
colorOptions.forEach((color) => color.addEventListener("click", onColorClick));
modeBtn.addEventListener("click", onModeClick);
reBtn.addEventListener("click", onReStart);
eraserBtn.addEventListener("click", onEraser);
fileInput.addEventListener("change", onFileChange);
saveBtn.addEventListener("click", onSaveImg);
// selectOption.addEventListener("click", selectOptions);
//select의 옵션을 선택하면 폰트-패밀리가 변경
//1. option의 값을 찾는다.
//2. 값을 변수로 지정하고, javascript의 font-famiily를 제어하는 곳에다 넣을 수 있게 조작?
//3. 클릭하면 변경되는 함수를 만들어 도출