interface Array<T> {
  forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
  map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
  filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
  filter(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];
}

[1, 2, 3].forEach((item) => console.log(item));

['1', '2', '3'].forEach((item) => console.log(item));

[true, false].forEach((item) => console.log(item));

['123', 123, true].forEach((item) => console.log(item));

[1, 2, 3].map((item) => console.log(item.toString()));

[1, 2, 3].filter((item) => item % 2);

const predicate = (value: string | number): value is string => typeof value === 'string';
const filtered = ['1', 2, '3'].filter((item) => typeof item === 'string'); // (string | number)[]
const filtered2 = ['1', 2, '3'].filter<string>((item) => typeof item === 'string');
const filtered3 = ['1', 2, '3'].filter(predicate); // string[]
const filtered4 = ['1', 2, '3'].filter<string>(predicate); // string[]
