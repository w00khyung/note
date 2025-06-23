function abc(a: number, b?: number, c?: number) {}

abc(1);
abc(1, 2);
abc(1, 2, 3);

let obj: { a: string; b?: string } = { a: 'hello', b: 'world' };
obj = { a: 'hello' };

function add<T extends string | number>(x: T, y: T): T {
  return x + y;
}

add<number>(1, 2);
add(1, 2);
add<string>('1', '2');
add('1', '2');
add(1, '2');
