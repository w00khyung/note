function numOrStr(a: number | string) {
  if (typeof a === 'number') {
    a.toFixed(1);
  }

  if (typeof a === 'string') {
    a.charAt(1);
  }

  if (typeof a === 'boolean') {
    a.toString(); // Property 'toString' does not exist on type 'never'.
  }
}

numOrStr(1);
numOrStr('a');

function numOrNumArray(a: number | number[]) {
  if (typeof a === 'number') {
    a.toFixed(1);
  }

  if (Array.isArray(a)) {
    a.push(1);
  }
}

numOrNumArray(1);
numOrNumArray([1, 2, 3]);

class A {
  aaa() {
    return 1;
  }
}

class B {
  bbb() {
    return 2;
  }
}

function aOrB(a: A | B) {
  if (a instanceof A) {
    a.aaa();
  }

  if (a instanceof B) {
    a.bbb();
  }
}

aOrB(A); // Argument of type 'typeof A' is not assignable to parameter of type 'A | B'.
aOrB(new A());
aOrB(new B());

type BType = { type: 'b'; bbb: string };
type CType = { type: 'c'; ccc: string };
type DType = { type: 'd'; ddd: string };

function typeCheck(a: BType | CType | DType) {
  if (a.type === 'b') {
    a.bbb;
  }

  if (a.type === 'c') {
    a.ccc;
  }

  if (a.type === 'd') {
    a.ddd;
  }
}

type E = { type: 'e'; eee: string };
type F = { type: 'f'; fff: string };
type G = { type: 'f'; ggg: string };

function typeCheck2(a: E | F | G) {
  if ('eee' in a) {
    a.eee;
  }

  if ('fff' in a) {
    a.fff;
  }

  if ('ggg' in a) {
    a.ggg;
  }
}
