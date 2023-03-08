// const a = 10;

// console.log( a + 2 );
// console.log( a * 2 );
// console.log( a / 2 );

// // object
// const player = { 
//     name: "nico",
//     points: 10,
//     fat: true,
//  };
//  console.log(player);
//  console.log(player.name);
//  player.fat = false;
//  player.lastName = "no";
 

//  function
// function sayHello(nameOfPerson, age){
//     console.log(nameOfPerson, age);
// }

// // function에 데이터 보내는 법
// console.log("lalalal")
// sayHello("nico", 20);
// sayHello();

// function plus(a, b){
//     console.log(a + b);
// }
// function divide(a, b){
//     console.log(a/b)
// }
// plus(2, 5);
// divide(2, 6);

// const player = {
//     name: "nico",
//     sayHello: function(otherName){
//         console.log("hello " + otherName) ;

//     },
// };
// console.log(player.name);
// player.sayHello("lynn");

// 과제1. 더하기 빼기 나누기 제곱의 function을 object안에 만들고 console에 찍기

// const calculator = {
//     add: function(a, b){
//         alert(a + b);
//     },
//     minus: function(c, d){
//         console.log(c - d);
//     },
//     divide: function(e, f){
//         console.log(e / f);
//     },
//     powerOf: function(g, h){
//         console.log(g ** h);
//     }
// };
// calculator.add(2, 5);
// calculator.minus(2, 5);
// calculator.divide(2, 5);
// calculator.powerOf(2, 5);

// const age = 96;
// function calculateKrAge(ageOfRoreigner){
//     return ageOfRoreigner + 2;
// }
// const krAge = calculateKrAge(age);
// console.log(krAge);

// 조건문 공부 2.13
// const age = parseInt(prompt("How old are you?"));

// console.log(isNaN(age));
// // if(condition){
// //     //condition === true
// // }else{
// //     //condition === false
// // }

// if(isNaN(age)){
//     console.log("please write a num")
// }

// const age = parseInt(prompt("How old are you?"));

// if(isNaN(age) || age < 0){
//     console.log("please write a number");
// }else if(age < 18){
//     console.log("too young");
// }else if(age >= 18 && age <= 50){
//     console.log("you can drink")
// }else if( age === 100){
//     console.log("wow you are wise")
// }else if( age > 80 ){
//     console.log("you can do whatever")
// }

// const title = document.getElementById("title");

// console.dir(title);
// title.innerHTML = "got";
// console.log(title.id);
// console.log(title.className);

// const hellos = document.getElementsByClassName("hello");
// console.log(hellos);
// const ho = document.getElementsByTagName

// 3.3 event 를 listen한다.
// const title = document.querySelector(".hello h1:first-child");
// title.innerText = "Hello"
// title.style.color = "red";
// console.dir(title);
// // function handleTitleClick(){
// //     title.style.color = "blue";
// // }
// function handleMouse(){
//     title.innerText = "Mouse is here"
// }
// function handleMouseLeave(){
//     title.innerText = "Mouse is gone"
// }
// function handleDrag(){
//     title.style.background = "yellow";
// }
// function handleOut(){
//     title.style.background = "pink";
// }
// function handleWindowRe(){
//     document.body.style.backgroundColor = "tomato";
// }
// function handleCopy(){
//     alert("copy")
// }
// function handleWifi(){
//     alert("SoS")
// }
// function handleWifiOn(){
//     alert("SoS")
// }
// title.onclick = handleTitleClick;
// title.addEventListener("mouseenter", handleMouse);
// title.addEventListener("mouseleave", handleMouseLeave);
// title.addEventListener("mousemove", handleDrag);
// title.addEventListener("mouseout", handleOut);

// window.addEventListener("resize", handleWindowRe);
// window.addEventListener("copy", handleCopy);
// window.addEventListener("offline", handleWifi);
// window.addEventListener("online", handleWifiOn);

// 3.6 css in javascript
// const h1 = document.querySelector(".hello h1:first-child");

// function handleTitleClick() {
//     const currentColor = h1.style.color;
//     let changeColor;
//    if(currentColor === "blue"){
//     changeColor = "tomato";
//    }else{
//     changeColor = "blue";
//    }
//    h1.style.color = changeColor;
// }

// h1.addEventListener("click", handleTitleClick);

// #3.7-3/8
// const h1 = document.querySelector(".hello h1:first-child");
// function handleTitleClick() {
//     h1.className = "active"; //getter이면서 setter
//     const clickedClass = "clicked";
//     if(h1.classList.contains(clickedClass)){
//         h1.classList.remove(clickedClass);
//     }else{
//         h1.classList.add(clickedClass);
//     }
// }

// #3.8
// const h1 = document.querySelector(".hello h1:first-child");
// function handleTitleClick() {
//     h1.classList.toggle("clicked");
// }

// h1.addEventListener("click", handleTitleClick);

//#4.0 앱 만들기
// const loginInput = document.querySelector("#login-form input")
// const loginBtn = document.querySelector("#login-form button")
// function onBtnClick(){
//     const username = loginInput.value;
//     // if(username === ""){
//     //     alert("you must write information!!");
//     // }else if(username.length > 15){
//     //     alert("your name is too long");
//     // }
// }
// loginBtn.addEventListener("click", onBtnClick);

// #4.3 브라우저 기본동작 막기 2 (링크로 이동 막기)
//javascript의 모든 eventLisnter function의 첫번째 argument(tomato)는 항상 지금 벌어진 event들에 대한 정보>object이다.
//addeventlistener 안에 있는 함수는 직접 실행하지않고 브라우저가 한다. 또한 event에 대한 정보도 함께 준다. 우리는 자리를 만들어주면 된다.
// function linkClick(event){
//     event.preventDefault();
// }
// link.addEventListener("click", linkClick);
// 4.4 로그인하면 form 없애기
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
// const link = document.querySelector("#login-form + a")

function onSubmit(event){
    event.preventDefault(); //이 함수는 어떤 event의 브라우저가 기본적으로 하는 동작들을 막는것이다.
    const writeUsername = loginInput.value;
    localStorage.setItem(USERNAME_KEY, writeUsername);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreeting(writeUsername);
};
//화면에 텍스트 보여주는 함수 
function paintGreeting(username){
    greeting.innerText = `hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
};

//로컬에 저장한 username으로 값이 있으면 h1을 보여주고 없으면 login-form을 보여준다.
const savedUsername = localStorage.getItem(USERNAME_KEY); //key에 해당하는 value.
if(savedUsername === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onSubmit);
}else{
    //show the greeting
    paintGreeting(savedUsername);
}



