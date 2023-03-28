// <⚠️ DONT DELETE THIS ⚠️>
// import "style.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const title = document.querySelector("h2");

window.onresize = function () {
  const widthSize = window.innerWidth;
  title.style.color = "#ffffff";
  if (widthSize <= 700) {
    document.body.style.backgroundColor = colors[0];
  } else if (widthSize > 700 && widthSize <= 900) {
    document.body.style.backgroundColor = colors[1];
  } else if (widthSize > 900 && widthSize <= 1200) {
    document.body.style.backgroundColor = colors[2];
  }
};
const superEventHandler = function () {
  function onMouseOver() {
    title.innerText = "the mouse is here";
    title.style.color = colors[0];
  }
  function onMouseLeave() {
    title.innerText = "the mouse is gone";
    title.style.color = colors[1];
  }
  function onResize() {
    title.innerText = "window size is changed";
    title.style.color = colors[2];
  }
  function onMouseRight() {
    title.innerText = "mouse click right";
    title.style.color = colors[3];
  }
  title.addEventListener("mouseover", onMouseOver);
  title.addEventListener("mouseleave", onMouseLeave);
  window.addEventListener("resize", onResize);
  window.addEventListener("contextmenu", onMouseRight);
};
superEventHandler();

//guess number game
const firstNum = document.getElementById("first-num"); //범위의 input
const myNum = document.getElementById("my-num"); //내가 입력하는 input

const playing = document.querySelector(".play"); //내가 입력하면 그 input의 값과 랜덤 값을 보여줄 공간
const result = document.querySelector(".result-txt"); //내가 입력한 숫자와 랜덤의 값의 결과
const btn = document.getElementById("btn"); //내가 입력할 input의 버튼
const reBtn = document.getElementById("re-btn"); //리셋 버튼

const MAX_KEY = "maxNum";
const RANDOM_KEY = "randomNum";

function saveValue(e) {
  e.preventDefault();
  const maxNum = firstNum.value; //내가 지정하는 랜덤값 범위의 숫자, input의 값
  const machineNum = Math.floor(Math.random() * maxNum); //input의 값 안에서 랜덤으로 지정한 값

  localStorage.setItem(MAX_KEY, maxNum); //로컬에 범위값 저장
  localStorage.setItem(RANDOM_KEY, machineNum); //로컬에 랜덤값 저장

  function guessNum() {
    const myValue = myNum.value;
    playing.innerText = `you chose: ${myValue}, machine chose:${machineNum}`;

    if (myValue == machineNum) {
      result.innerText = "you win 👍";
    } else if (myValue > machineNum) {
      result.innerText = "Too big 😅";
    } else if (myValue < machineNum) {
      result.innerText = "too small 🥲";
    }
  }
  btn.addEventListener("click", guessNum);
}
function reGame() {
  firstNum.value = "";
  myNum.value = "";
  playing.innerText = "";
  result.innerText = "";
}

firstNum.addEventListener("change", saveValue);
reBtn.addEventListener("click", reGame);
