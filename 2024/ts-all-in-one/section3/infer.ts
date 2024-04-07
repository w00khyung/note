function zip(x: number, y: string, z: boolean): { x: number; y: string; z: boolean } {
  return { x, y, z };
}

type CustomParameters<T extends (...args: any) => any> = T extends (...args: infer A) => any ? A : never;
type CustomReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer A ? A : never;

type Params = CustomParameters<typeof zip>;
type Returns = CustomReturnType<typeof zip>;

// type ConstructorParameters<T extends abstract new (...args: any) => any> = T extends abstract new (...args: infer P) => any ? P : never;
// type InstanceType<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer R ? R : any;

class A {
  a: string;
  b: number;
  c: boolean;

  constructor(a: string, b: number, c: boolean) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
}

const a = new A('a', 1, true);
type B = ConstructorParameters<typeof A>;
type I = InstanceType<typeof A>;
