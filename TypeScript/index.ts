// let a = "hello";
// let b: boolean = true;
// let c: number[] = [];
// c.push(1);
// console.log(c);

//player라는 변수안의 object를 각각 어떤 타입으로 할 것인지 저장한다, 그러나 name은 필수적으로 age는 선택적으로 하고 싶을때
// ?를 붙여 표시할 수 잇다.
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
