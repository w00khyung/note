function a(str: string): number {
  return +str;
}

a('1');

type B = (x: string) => number | string;

const b: B = a; // 더 넓은 타입으로 대입 가능

function c(x: string): number | string {
  return +x;
}

type D = (x: string) => number;

const d: D = c; // 더 좁은 타입으로 대입 불가능
