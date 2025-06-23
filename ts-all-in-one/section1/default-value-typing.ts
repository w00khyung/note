const a = (b = 3, c = 5) => {};

const b = (a: { children: string } = { children: 'zerocho' }) => {};

const add = <T = unknown>(a: T, b: T): T => a + b;
