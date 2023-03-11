const todoForm = document.getElementById("todo-form");
const toDoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";
let toDos = [];

function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
} //todos의 배열을 텍스트로 로컬에 저장하는 함수
 //JSON.stringify() >>()안의 내용을 텍스트로 변환
 //JSON.parse() >>()안의 텍스트를 array로 변환

function delTodo(event){
    const li = event.target.parentElement; //console.log(event.target)으로 li의 부분을 찾은 것.
    li.remove(); //지우기
}

function paintTodo(writeTodo){
    const li = document.createElement("li"); //li 생성
    const span = document.createElement("span"); //span 생성
    const btn = document.createElement("button");
    span.innerText = writeTodo; //span에 input에 적은 값 넣기
    btn.innerText = "❌";
    btn.addEventListener("click", delTodo);
    li.appendChild(span); //span을 li에 넣기
    li.appendChild(btn); //btn을 li에 넣기
    todoList.appendChild(li); //todo-list(ul)에 li 넣기

}

function handleTodoSubmit(event){
    event.preventDefault();
    const writeTodo = toDoInput.value; //현재의 todoinput.value를 새로운 변수에 저장됨. 그 후의 변경되어도 writetodo는 상관없음.
    toDoInput.value = "";
    toDos.push(writeTodo);
    paintTodo(writeTodo);
    saveTodos(); //input이 submit이 되면 이 함수가 작동해야함.
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos !== null){
    const parsedTodos = JSON.parse(savedTodos);
    toDos = parsedTodos; //toDos의 배열이 비어있으므로 이전에 로컬에 저장한 값을 넣어주면 새로고침해도 이전 값이 사라지지 않는다.
    parsedTodos.forEach(paintTodo);
}
// 표현 방법 1(로컬에 있는 배열을 각각 표현하는 ㅂ)
// function sayHello(item){
//     console.log("hello", item);
// } 
// parsedTodos.forEach(sayHello);
//배열.forEach(sayHello);가 되면 sayHello라는 함수의 인수(item)으로 배열에 있는 item을 각각 가져와 console로 나타낸다.    

//표현 방법 2 (arrow 함수로)
// parsedTodos.forEach((item) => console.log("hello", item));
//forEach() 함수는 array안에 있는 item을 각각 실행하게 해준다. 