interface Arr<T> {
  forEach(callback: (item: T) => void): void;
}

const a: Arr<number> = [1, 2, 3];

a.forEach((item) => console.log(item));

const b: Arr<string> = ['1', '2', '3'];

b.forEach((item) => console.log(item));
