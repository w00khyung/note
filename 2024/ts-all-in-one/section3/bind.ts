function a(this: Window | typeof obj, params: string) {
  console.log(this.name);
}

const obj = { name: 'zerocho' };

// bind(this: Function, thisArg: any, ...argArray: any[]): any;
// type ThisParameterType<T> = T extends (this: infer U, ...args: never) => any ? U : unknown;
// type OmitThisParameter<T> = unknown extends ThisParameterType<T> ? T : T extends (...args: infer A) => infer R ? (...args: A) => R : T;

const b = a.bind(obj);
b(); // zerocho

type T = ThisParameterType<typeof a>;
type NoThis = OmitThisParameter<typeof a>;

const zerocho = {
  name: 'zerocho',
  sayHello() {
    console.log(`Hello, ${this.name}`);
  },
};

const sayHello = zerocho.sayHello;
const sayHi = zerocho.sayHello.bind({ name: 'zero' });
sayHi(); // Hello, zero

function add(a: number, b: number, c: number, d: number, e: number, f: number) {
  return a + b + c + d + e + f;
}

const add1 = add.bind(null);
add1(1, 2, 3, 4, 5, 6); // 21

const add2 = add.bind(null, 1);
add2(2, 3, 4, 5, 6); // 21

const add3 = add.bind(null, 1, 2);
add3(3, 4, 5, 6); // 21

const add4 = add.bind(null, 1, 2, 3);
add4(4, 5, 6); // 21

const add5 = add.bind(null, 1, 2, 3, 4);
add5(5, 6); // 21

const add6 = add.bind(null, 1, 2, 3, 4, 5);
add6(6); // 21

const add7 = add.bind(null, 1, 2, 3, 4, 5, 6);
add7(); // 21
