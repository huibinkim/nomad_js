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
    // toDos = toDos.filter(toDo => toDo.id !== li.id); 이렇게 쓰면 작동 안함 이유는 li.id를 typeof로 보면 string으로 나와있다. toDo.id는 number이기 때문에 통하지 않음. 따라서 li.id를 숫자로 변환필요
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveTodos(); // 로컬에 저장필요
}

function paintTodo(writeTodo){
    const li = document.createElement("li"); //li 생성
    li.id = writeTodo.id; //writeTodoObj의 id값.
    const span = document.createElement("span"); //span 생성
    const btn = document.createElement("button");
    span.innerText = writeTodo.text; //span에 input에 적은 값 넣기 //writeTodoObj의 text
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
    const writeTodoObj = {
        text:writeTodo,
        id:Date.now(),
    }; //로컬에 저장한 input값을 array로 저장한 것을 array안에 object로 저장하고 싶다. 왜냐면 id를 추가하여 삭제하기 위해서
    toDos.push(writeTodoObj);//input값의 array object를 푸쉬하여 저장한다.
    paintTodo(writeTodoObj);
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

//filter() 함수 : 지우고 싶은 item을 제외한다.
// function sexy(){}
//[1, 2, 3, 4].filter(sexy) >>filter는 함수 sexy를 부르고 거기에 array값 하나하나를 넣어서 도출한다.
                            //sexy 함수는 반드시 true를 리턴해야한다. 만약 새 array에도 1, 2, 3, 4 값을 포함하고 싶다면
                            //하지만 false값은 새 array에 포함되지 않는다. false값은 제외하고 도출.
// sexy(1) = 1 true                        
// sexy(2) = 2 true                  
// sexy(3) = 3 false                  
// sexy(4) = 4 true
//>> [1, 2, 4]                 
// filter 함수 예제
// function sexyFilter(item){return item !==3}
// console.log([1, 2, 3, 4].filter(sexyFilter)); //[1, 2, 4]

