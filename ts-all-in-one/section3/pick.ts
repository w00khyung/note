interface Profile {
  name: string;
  age: number;
  married: boolean;
}

type CustomPick<T, S extends keyof T> = {
  [Key in S]: T[Key];
};

const zerocho: Pick<Profile, 'name' | 'age'> = {
  name: 'ZeroCho',
  age: 30,
};

const zerocho2: CustomPick<Profile, 'name' | 'age'> = {
  name: 'ZeroCho',
  age: 30,
};
