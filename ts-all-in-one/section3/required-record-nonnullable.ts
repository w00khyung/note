interface Profile {
  name?: string;
  age?: number;
  married?: boolean;
}

type CustomRequired<T> = {
  [Key in keyof T]-?: T[Key];
};

type CustomReadonly<T> = {
  readonly [Key in keyof T]: T[Key];
};

const zerocho: CustomRequired<Profile> = {
  name: 'ZeroCho',
  age: 30,
  married: false,
};

type CustomRecord<T extends keyof any, S> = {
  [Key in T]: S;
};

const a: Record<string, number> = {
  a: 1,
  b: 2,
  c: 3,
};

type CustomNonNullable<T> = T extends null | undefined ? never : T;
