const con = document.getElementsByClassName("container");
const title = document.querySelector("h1"); //h1가져오기
const dDay = document.getElementById("day"); //#day 가져오기

//html css변경하기
title.style.textAlign = "center";
title.style.fontSize = "54px";
dDay.style.textAlign = "center";
dDay.style.fontSize = "30px";

function waitDay() {
  const xMas = new Date("2023-12-25");
  const today = new Date();
  const day = xMas - today;
  //   console.dir(day); 뺐을때 나타나는 값이 큰수가 나오는 이유는 기본적으로 ms 단위로 나타냈기때문

  const dayDate = Math.floor(day / (24 * 60 * 60 * 1000));
  const dayHour = Math.floor((day / (60 * 60 * 1000)) % 24);
  const dayMin = Math.floor((day / (60 * 1000)) % 60);
  const daySec = Math.floor((day / 1000) % 60);

  dDay.innerText = `${dayDate}d ${dayHour}h ${dayMin}m ${daySec}s`;
  //   console.log(dayDate, dayHour, dayMin, daySec);
}
waitDay();
setInterval(waitDay, 1000);

//1일 24시간 24*60분 24*60*60초 24*60*60*1000ms
