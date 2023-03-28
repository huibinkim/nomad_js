const casinoForm = document.querySelector("#casino-form");
//input태그 따로 끌어와줘야한다. 그뒤 이 input태그의 value를 가져올 수 있는 거임.
const zeroToInput = casinoForm.querySelector("#zeroTo");
const guessInput = casinoForm.querySelector("#guess");

//멘트 출력 javscript -> HTML
const youChose = document.querySelector("#random-game span:first-child");
const machineChose = document.querySelector("#random-game span:last-child");
const result = document.querySelector("#result");

//const zerotoNumber = localStorage.getItem("zeroTo");
//const yourNumber = localStorage.getItem("guess");

function machine() {
  const randomNumber = Math.ceil(
    Math.random() * localStorage.getItem("zeroTo")
  );
  console.log(randomNumber);
  localStorage.setItem("machine", randomNumber);

  machineChose.innerText = `the machine chose: ${randomNumber}.`;
  const machineNumber = localStorage.getItem("machine");
  if (localStorage.getItem("guess") === machineNumber) {
    result.innerHTML = "<p><strong>You Won!</strong></p>";
  } else {
    result.innerHTML = "<p><strong>You lost!</strong></p>";
  }
}
function you() {
  youChose.innerText = `You chose: ${localStorage.getItem("guess")},`;
}
function program(zerotoNumber, yourNumber) {
  if (zerotoNumber <= yourNumber) {
    //zerotoNumber should be bigger than yourNumber
    alert(`Shoud guess the number between 0 and ${zerotoNumber}`);
  } else {
    setTimeout(you, 1000); //appear after 1sec

    // machineNumber interval기능 여기에 도입하면 될듯?
    setInterval(machine, 1000); //per 1sec
  }
}

function casinoSubmit(event) {
  //Form의 submit 처리
  event.preventDefault();

  const zeroToNumber = zeroToInput.value; //이 한 줄 못 써서 애먹음
  localStorage.setItem("zeroTo", zeroToNumber); //key, value

  const guessNumber = guessInput.value;
  localStorage.setItem("guess", guessNumber);

  program(zeroToNumber, guessNumber);
}
casinoForm.addEventListener("submit", casinoSubmit);
