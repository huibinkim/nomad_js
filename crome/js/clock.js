// interval = 매번 일어나야 하는 무언가 (매2분마다)
// setInterval( , ) = 내가 동작시키고 싶은 함수를 매 2초마다(내가원하는시간만큼) 동작시킨다.
// setInterval은 두개의 인수를 받는다.
// 첫번째 argument(인수)는 내가 실행하고자 하는 함수
// 두번째 인수는 호출된 function 간격을 몇 ms로 할지 정함.
//setTimeout() = (호출하려는 함수, 기다리는 시간); 기다렸다가 한번만 나타남
const clock = document.querySelector("h2#clock");
clock.style.fontSize = "72px";
function getDate() {
  const date = new Date();
  const second = String(date.getSeconds()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${second}`;
}
getDate(); //setInterval이 1초 있다가 실행하기때문에 그간격을 없애기 위해 호출
setInterval(getDate, 1000);

// container
const con = document.querySelector("#wrap .container");
