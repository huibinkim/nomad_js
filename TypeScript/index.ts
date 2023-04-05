// let a = "hello";
// let b: boolean = true;
// let c: number[] = [];
// c.push(1);
// console.log(c);

//player라는 변수안의 object를 각각 어떤 타입으로 할 것인지 저장한다, 그러나 name은 필수적으로 age는 선택적으로 하고 싶을때
// ?를 붙여 표시할 수 잇다.
/**
 * 

type Age = number;
type Name = string;
type Player = {
  readonly name: Name;
  age?: Age;
};
//readonly는 일종의 보호장치로 생각하면됨. 읽기전용임. 불변성.

// function playerMaker(name: string): Player {
//   return {
//     name,
//   };
// }
//위의 함수를 arrow함수로 나타냈을 때
const playerMaker = (name: string): Player => ({ name });
const names: readonly string[] = ["1", "3"];
const nico = playerMaker("hui");
nico.age = 12;

//Tuple : array를 생성, 최소한의 길이를 가져야 하고, 특정 위치에 특정 타입이 있어야함.
const player: readonly [string, number, boolean] = ["nico", 12, false];
//any : 비어있는 값을 쓰면 any , typescript를 탈츨하고 싶을 때 사용하면됨. 바보짓을 허용함.
const a: any[] = [1, 2, 3];
const b: any = true;
a + b;
//undnown 타입을 모를때
let c: unknown;
if (typeof c === "number") {
  let d = c + 1;
} //작동함
if (typeof c === "string") {
  let b = c.toUpperCase();
}
//void : 아무것도 return 하지않는 함수를 대상으로 사용한다.
function helo() {
  console.log("x");
}

//never : 함수가 절대 return하지 않을때,
function hello(): never {
  throw new Error();
}

function hellog(name: string | number) {
  if (typeof name === "string") {
  } else if (typeof name === "number") {
  } else {
    name; //never
  }
}

//#3.0 강의시작
//call signatures : 함수 위에 마우스를 올렸을 때 보게 되는 것을 뜻함. 인자의 타입과 함수의 반환 타입을 알려줌.
// function add(a:number, b:number){
//   return a + b
// }
type Add = (a: number, b: number) => number;
const add: Add = (a, b) => a + b;
 */
//overloading : 함수가 여러개의 call signatures를 가지고 있을 때 발생한다.
//Function(=Method) Overloading은 직접 작성하기보다 외부 라이브러리에 자주 보이는 형태로, 하나의 함수가 복수의 Call Signature를 가질 때 발생한다
type Add = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

const add: Add = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};
add(1, 2);
add(1, 2, 3);

//예시
type Config = {
  path: string;
  state: object;
};
type Push = {
  (path: string): void;
  (config: Config): void;
};
const push: Push = (config) => {
  if (typeof config === "string") console.log(config);
  else {
    console.log(config.path);
  }
};
