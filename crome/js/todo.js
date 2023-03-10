const todoForm = document.getElementById("todo-form");
const toDoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

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
    paintTodo(writeTodo);
}

todoForm.addEventListener("submit", handleTodoSubmit);

