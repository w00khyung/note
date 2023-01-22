type World = 'world';
const a: World = 'world';

const tuple: [number, string] = [1, '2'];
tuple.push(2);

const direction = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;

const obj = {
  a: '123',
  b: 'hello',
  c: 1,
} as const;

// type의 key만 가져오고 싶을 때,
type Key = keyof typeof obj;

// type의 value만 가져오고 싶을 때,
type Value = typeof obj[keyof typeof obj];

type Animal = { breath: true };
type Poyoryuo = Animal & { breed: true };
type Human = Poyoryuo & { think: true };

// extends
const A: Human = {
  breath: true,
  breed: true,
  think: true,
};

// type vs interface
// 라이브러리에서는 interface를 많이 사용한다.
// 기능적 차이는 거의 없고, 표현적 차이에서 interface가 더 좋다.
interface A {
  breath: true;
}

interface B extends A {
  breed: true;
}

// interface는 합쳐진다.
interface AAA {
  talk: () => void;
}

interface AAA {
  eat: () => void;
}

interface AAA {
  shit: () => void;
}

const aaa: AAA = {
  talk: () => {},
  eat: () => {},
  shit: () => {},
};

// typescript interface naming rule
interface IProps {}
type TAlias = string | number;
enum EHello {
  Left,
  Right,
}

// 최근에는 I, T, E를 붙이지 않는 것이 추세다.
// type인지 interface인지가 중요하지 않을 뿐더러, 에디터에서 마우스 호버하면 다 보이기 때문에 굳이?
interface Props {}
type Alias = string | number;
enum Hello {
  Left,
  Right,
}

// 좁은 타입과 넓은 타입
// any는 전체 집합이며, never는 공집합이다.

// 잉여 속성 검사
interface Surplus {
  hello: string;
}

const obj1 = { hello: 'hello', world: 'world' };
const obj2: Surplus = obj1;

// void
// void는 return 값이 존재하면 안되나, undefined는 허용된다. (?)
function func1(): void {
  return null;
}

function func2(): void {
  return undefined;
}

function func3(): void {
  return;
}

// void의 종류, return 값이 존재해도 되는 void가 있다.
// parameter와 method의 경우, void로 선언이 되어도 return 값이 존재하는게 가능하다.
// why? 해당 경우의 void 라는 의미는, return 값을 사용하지 않겠다라는 의미이기 때문이다.
// 같은 void 라도 의미가 다르다.
function func4(callback: () => void): void {
  return;
}

func4(() => {
  return 'callback';
});

interface IFunc {
  talk: () => void;
}

const func5: IFunc = {
  talk: () => {
    return 'talk';
  },
};

// declare
declare function forEach(arr: number[], callback: (el: number) => number): void;

let target: number[] = [];
forEach([1, 2, 3], (el) => target.push(el));
forEach([1, 2, 3], (el) => {
  target.push(el);
});

// void는 typescript에서 return 값이 있더라도 무시하므로, 원칙적으로 에러가 발생하지 않더라도 return 값을 적지 않는게 맞다.
interface I1 {
  talk: () => void;
}

const i1: I1 = {
  talk: () => {
    return 1;
  },
};

// talk에서 return 값이 존재하나, i2는 void라는 타입으로 추론된다.
const i2 = i1.talk();

// 강제 타입 변환을 위해서 as unknown as number를 사용할 수 있다.
// const i2 = i1.talk() as unknown as number;

// any를 사용할 빠에 unknown을 사용하는 것이 좋다. (unknown도 없는 것이 좋지만)
// any를 사용하는 것은 '이후에 타입 검사를 하지 않겠다(타입 선언 포기)' 라는 의미이다.
