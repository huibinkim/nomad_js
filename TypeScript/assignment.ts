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
*/
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
