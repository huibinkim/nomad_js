//화면에 날씨 보여주기
//navigator.geolocation
//브라우저에서 위치 좌표를 준다. 2개의 인수가 필요하다. 하나는 모든게 잘될때 실행될 함수, 나머지는 에러가 발생할 때 실행되는 함수
const API_KEY = "4494c2dc1ca24885d420bbe597555f12";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather= document.querySelector("#weather span:first-child");
            const city= document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}` ;
        });
    //fetch > url 부를수있는 함수 , fetch는 Promise이다 당장 뭔가 일어나지 않고 시간이 좀 걸린 후 일어난다.
    //그렇기 때문에 then을 써 response의 json을 받아온다.
}
function onGeoErr(){
    alert("cant find location.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);
//#8.2 api : 다른 서버와 이야기할 수 있는 방법
