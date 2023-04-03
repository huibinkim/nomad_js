// let a = "hello";
// let b: boolean = true;
// let c: number[] = [];
// c.push(1);
// console.log(c);

//player라는 변수안의 object를 각각 어떤 타입으로 할 것인지 저장한다, 그러나 name은 필수적으로 age는 선택적으로 하고 싶을때
// ?를 붙여 표시할 수 잇다.
type Age = number;
type Player = {
  name: string;
  age?: Age;
};

// function playerMaker(name: string): Player {
//   return {
//     name,
//   };
// }
//위의 함수를 arrow함수로 나타냈을 때
const playerMaker = (name: string): Player => ({ name });

const nico = playerMaker("hui");
nico.age = 12;
