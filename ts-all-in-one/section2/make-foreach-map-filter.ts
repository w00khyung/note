interface Arr<T> {
  forEach(callback: (item: T, index: number) => void): void;
  map<S>(callback: (v: T) => S): S[];
  filter<S extends T>(callback: (v: T) => v is S): S[];
}

const a: Arr<number> = [1, 2, 3];

a.forEach((item) => console.log(item));

const b: Arr<string> = ['1', '2', '3'];

b.forEach((item) => console.log(item));

const c = a.map((item) => item.toString());

const d = a.filter((item): item is number => item > 1);

const e: Arr<number | string> = ['1', 2, '3', 4, '5'];

const f = e.filter((item): item is string => typeof item === 'string');
