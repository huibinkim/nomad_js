/*
type Words = {
  [key: string]: string;
};
// let dict:Words = {
//     1:"flddk"
// }
class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    //단어 추가
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term: string) {
    //단어 정의
    return this.words[term];
  }
  del(term: string) {
    //단어 삭제
    if (this.words[term] !== undefined) {
      delete this.words[term];
      console.log("delete");
    }
  }
  update(term: string, newTerm: string) {
    //단어 이름 바꾸기
    if (this.words.hasOwnProperty(term)) {
      this.words[newTerm] = this.words[term];
      delete this.words[term];
      console.log(`${this.words[term]}으로 바꼈습니다.`);
    }
  }
  showWord() {
    //dic에 있는 단어들
    const keys = dict.words;
    console.log(keys);
  }
  count() {
    //단어의 갯수
    const count = Object.keys(dict.words).length;
    console.log(`단어의 수는 ${count}`);
  }
  upsert(term: string, newTerm: string) {
    //단어를 업데이트
    if (this.words.hasOwnProperty(term)) {
      this.words[newTerm] = this.words[term];
      delete this.words[term];
      console.log(`${this.words[newTerm]}으로 바꼈습니다.`);
    } else {
      const newThing = new Word(term, newTerm);
      dict.add(newThing);
    }
  }
  exist(term: string) {
    //단어가 사전에 있는지
    if (this.words.hasOwnProperty(term)) {
      console.log(`${term}은 존재합니다.`);
    } else {
      console.log(`${term}은 없습니다.`);
    }
  }
  bulkAdd(bulkWord: Word[]) {
    bulkWord.forEach((element) => this.add(element));
  }
  bulkDel(bulkWord: string[]) {
    bulkWord.forEach((element) => this.del(element));
  }
}
class Word {
  constructor(public term: string, public def: string) {}
}

const kimchi = new Word("kimchi", "한국음식");
const pasta = new Word("pasta", "italian food");
const dict = new Dict();

dict.add(kimchi);
dict.add(pasta);
dict.showWord();
dict.count();
dict.def("kimchi");
dict.del("pasta");
dict.update("kimchi", "dongchimi");

// interface User {
//   firstName: string;
//   lastName: string;
//   sayHi(name: string): string;
//   fullName(): string;
// }
// interface Human {
//   health: number;
// }
// class Player implements User, Human {
//   constructor(
//     public firstName: string,
//     public lastName: string,
//     public health: number
//   ) {}
//   fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
//   sayHi(name: string) {
//     return `hello ${name}. My name is ${this.fullName}`;
//   }
// }
// function makeUser(user: User): User {
//   return {
//     firstName: "icod",
//     lastName: "lskjf",
//     fullName: () => "fdf",
//     sayHi: (name) => "string",
//   };
// }
// makeUser({
//   firstName: "icod",
//   lastName: "lskjf",
//   fullName: () => "fdf",
//   sayHi: (name) => "string",
// });

> localStorage.setItem('nums', JSON.stringify([1, 2, 3]))
undefined
> JSON.parse(localStorage.getItem('nums'))
[1, 2, 3]
*/
interface SStorage<T> {
  [key: string]: T; //이건 key가 제한되지 않은 오브젝트를 정의해줌. key가 몇개인진 모르지만 무슨 타입인진 알고있음
}
class LocalStroage<T> {
  private storage: SStorage<T> = {};
  setItem(key: string, value: T) {
    this.storage[key] = value;
  }
  clearItem(key: string) {
    //string형식의 key를 받아서 이걸 로컬 스토리지 로부터 지움
    delete this.storage[key];
  }
  getItem(key: string): T {
    return this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}

const localStroage = new LocalStroage<string>();
localStroage.getItem("ket");
localStroage.setItem("hello", "type");

interface IGeolocation {
  clearWatch(watchId: number): void;
  getCurrentPosition(
    successCallback: IPositionCallback,
    errorCallback?: IPositionErrorCallback | null,
    options?: IGeolocationOptions
  ): void;
  watchPosition(
    successCallback: PositionCallback,
    errorCallback?: IPositionErrorCallback | null,
    options?: IGeolocationOptions
  ): number;
}

// successCallback interface
interface IPositionCallback {
  (position: IGeolocationPosition): void;
}
interface IGeolocationPosition {
  readonly coords: IGeolocationCoordinates;
  readonly timestamp: IEpochTimeStamp;
}
interface IGeolocationCoordinates {
  readonly accuracy: number;
  readonly altitude: number | null;
  readonly altitudeAccuracy: number | null;
  readonly heading: number | null;
  readonly latitude: number;
  readonly longitude: number;
  readonly speed: number | null;
}
type IEpochTimeStamp = number;

// errorCallback interface
interface IPositionErrorCallback {
  (positionError: IGeolocationPositionError): void;
}
interface IGeolocationPositionError {
  readonly code: number;
  readonly message: string;
  readonly PERMISSION_DENIED: number;
  readonly POSITION_UNAVAILABLE: number;
  readonly TIMEOUT: number;
}

// option interface
interface IGeolocationOptions {
  enableHighAccuracy: boolean;
  timeout: number;
  maximumAge: number;
}

// Geolocation class
class GGeolocation implements IGeolocation {
  clearWatch(watchId: number) {
    console.log(watchId);
  }
  getCurrentPosition(
    successCallback: IPositionCallback,
    errorCallback?: PositionErrorCallback | null,
    options?: PositionOptions
  ) {
    if (successCallback) console.log(successCallback);
    if (errorCallback) console.log(errorCallback);
    if (options) console.log(options);
  }
  watchPosition(
    successCallback: PositionCallback,
    errorCallback?: PositionErrorCallback | null,
    options?: PositionOptions
  ) {
    if (successCallback) console.log(successCallback);
    if (errorCallback) console.log(errorCallback);
    if (options) console.log(options);
    return 0;
  }
}

const geolocation = new GGeolocation();
// 오버로딩
geolocation.getCurrentPosition(test);
geolocation.getCurrentPosition(test, test);
geolocation.getCurrentPosition(test, test, {});

function test() {}

// navigator.geolocation.getCurrentPosition((position) => console.log(position));
/*
let options = {
  timeout: 5000,
  maximunAge: 0,
};
interface GeolocationAPI {
  loaded?: boolean;
  coordinates?: { lat: number; lng: number };
  error?: { code: number; message: string };
}
interface position {
  [key: string]: {};
}
function success(pos: position) {
  var crd = pos.coords;

  console.log("Your current position is:");
  console.log(`Latitude : ${crd}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err:) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);
*/
