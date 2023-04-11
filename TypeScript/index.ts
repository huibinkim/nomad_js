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

//#3.2 polymorphism (다형성) = many structure 여러가지 다른 구조들
// concrete type : number, string, boolean ...
//generic : type의 placeholder 같은 것. 기본적으로 placeholder을 사용해서 내가 작성한 코드의 타입 기준으로 바꿔준다. 편리함.
// any와의 차이점은 해당 타입에 대한 정보를 잃지 않는다. any를 사용하게 되면 보호받지 못하고 number임에도 toUpperCase()를 사용하게 됨.
// 보통은 제네릭을 만들기 보단 라이브러리에서 사용할 것이다.
//제네릭은 선언 시점이 아니라 생성 시점에 타입을 명시하여 하나의 타입만이 아닌 다양한 타입을 사용할 수 있도록 하는 기법이다.

//generic 사용법
// 1. 타입스크립트에 사용하고 싶다고 알려줘야함.
type SuperPrint = {
  <T, M>(arr: T[], b?: M): T;
};
// const superPrint: SuperPrint = (arr) => {
//   arr.forEach((i) => console.log(i));
// };
const superPrint: SuperPrint = (arr) => arr[0];

const a = superPrint([1, 2, 3], "x");
const b = superPrint([true, false]);
const c = superPrint([1, 2, true, false]);
//함수로 나타내기
function superPrint<V>(a: V[]) {
  return a[0];
}
const a = superPrint([1, 2, 3]);
const b = superPrint([true, false]);
const c = superPrint([1, 2, true, false]);

//제네릭 타입 재사용
type Player<E> = {
  name: string;
  extraInfo: E;
};
type NicoExtra = {
  food: string;
};
type NicoPlayer = Player<NicoExtra>;
const nico: NicoPlayer = {
  name: "nico",
  extraInfo: {
    food: "kimchi",
  },
};

const lynn: Player<null> = {
  name: "lynn",
  extraInfo: null,
};
function printNumbers(arr: Array<number>) {}


// #4.0 객체지향프로그래밍
// const Player{
//    constructor(
//       private firstName :string,
//       private lastName:string
//    )
// }

//#4.2 static, interfaces
type WordsWord = {
  [key: string]: string;
};
// let dict:Words = {
//     1:"flddk"
// }
class Diction {
  private words: WordsWord;
  constructor() {
    this.words = {};
  }
  add(word: WordsW) {
    //단어 추가
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term: string) {
    //단어 정의
    return this.words[term];
  }
  static hello() {
    return "hello";
  }
}
class WordsW {
  constructor(public readonly term: string, public readonly def: string) {}
}

const gim = new WordsW("gim", "한국음식");
const pizza = new WordsW("pizza", "italian food");
const diction = new Diction();

diction.add(gim);
diction.add(pizza);
Diction.hello();

//type을 사용하는 방법 1
type Player = {
  nickname: string;
  healthBar: number;
};
const nico: Player = {
  nickname: "nico",
  healthBar: 10,
};
//type을 사용하는 방법 2
type Food = string;
const rice: Food = "delicious";

//type을 사용하는 방법 3
type Nickname = string;
type Health = number;
type Friends = Array<string>;
type Player = {
  nickname: Nickname;
  healthBar: Health;
};
const nico: Player = {
  nickname: "nico",
  healthBar: 10,
};

// 타입을 특정값으로 지정하여 사용하는 방법
type Team = "red" | "blue" | "yellow";
type Health = 1 | 5 | 10;
type Player = {
  nickname: string;
  team: Team;
  health: Health;
};

const nico: Player = {
  nickname: "huibin",
  team: "red",
  health: 5,
};

//##interface : object의 모양을 설명하는 다른 방법 ,오직 object의 모양을 특정해준다. type이 더 다양한 목적으로 사용가능
type Team = "red" | "blue" | "yellow";
type Health = 1 | 5 | 10;
interface Player {
  nickname: string;
  team: Team;
  health: Health;
}
const nico: Player = {
  nickname: "huibin",
  team: "red",
  health: 5,
};

//interface로 Player가 User를 상속받음. like Class
interface User {
  readonly name: string;
}
interface Player extends User {}
const nico: Player = {
  name: "nico",
};

//type으로 상속 받기(위와 동일), &의 의미는 and
type User = {
  name: string;
};
type Player = User & {};
const nico: Player = {
  name: "nico",
};
위의 두가지는 동일한 것을 뜻함. 내가 편한걸로 사용하셈 그러나 object를 설명할땐 interface가 나음
interface는 객체 지향 프로그래밍의 개념을 활용해서 디자인됨.

//interface는 같은 interface에 다른 이름의 property들을 쌓을 수 있다. type은 안됨.
interface User {
  name: string;
}
interface User {
  lastName: string;
}
interface User {
  health: number;
}

const nico: User = {
  name: "df",
  lastName: "d",
  health: 10,
};

//# 4.3 interface와 class 결합하여 사용
// 아래는 추상 클래스 >> 추상클래스는 이걸 상속받는 다른 클래스가 가질 property와 method를 지정하도록 한다.
// 추상 클래스는 상속받는 클래스가 어떻게 동작해야할지 알려주기 위해 사용
// 추상 클래스는 추상 클래스의 인스턴스를 만들수없다.(복사의 개념? new User)
// protected : 추상 클래스로부터 상속받은 클래스들이 proterty에 접근하도록 한다.
abstract class User {
  constructor(protected firstName: string, protected lastName: string) {}
  abstract sayHi(name: string): string;
  abstract fullName(): string;
}
class Player extends User {
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `hello ${name}. My name is ${this.fullName}`;
  }
}

// 추상클래스로 작성한 User는 자바스크립트에서는 실제로 사용되지 않고 그냥 클래스로 보임.
// interface는 추상클래스보다 좀 더 가볍기에 여기서 추상클래스같은 개념으로 사용이 가능하다.
// interface는 자바스크립트에는 존재하지 않기 때문에 자바스크립트에는 보여지진않는다. 따라서 파일의 크기가 작아짐.
// type이나 interface는 추상클래스 대신해서 사용할 수 있다.
//타입 alias 는 전체 타입
interface User {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}
interface Human {
  health: number;
}
class Player implements User, Human {
  constructor(
    public firstName: string,
    public lastName: string,
    public health: number
  ) {}
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `hello ${name}. My name is ${this.fullName}`;
  }
}
function makeUser(user: User): User {
  return {
    firstName: "icod",
    lastName: "lskjf",
    fullName: () => "fdf",
    sayHi: (name) => "string",
  };
}
makeUser({
  firstName: "icod",
  lastName: "lskjf",
  fullName: () => "fdf",
  sayHi: (name) => "string",
});
 */

// #4.5 Polymorphism (다형성) : 다른 모양의 코드를 가질 수  있게 해준다.
// 다형성을 이룰 수 있는 방법은 제네릭을 사용하는 것이다.
// 제네릭은 placeholder타입 을 쓸 수 있도록 해준다. not contrete type
// 때가 되면 typescript가 알아서 placeholder type을 concrete type으로 바꿔준다. 따라서 그냥 placeholder type만 쓰면됨.

interface SStorage<T> {
  [key: string]: T; //이건 key가 제한되지 않은 오브젝트를 정의해줌. key가 몇개인진 모르지만 무슨 타입인진 알고있음
}

class LocalStroage<T> {
  private storage: SStorage<T> = {};
  set(key: string, value: T) {
    this.storage[key] = value;
  }
  remove(key: string) {
    //string형식의 key를 받아서 이걸 로컬 스토리지 로부터 지움
    delete this.storage[key];
  }
  get(key: string): T {
    return this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}

const stringStorage = new LocalStroage<string>();
stringStorage.get("ket");
stringStorage.set("hello", "type");
const booleansStorage = new LocalStroage<boolean>();
booleansStorage.get("xxx");
booleansStorage.set("hello", false);
