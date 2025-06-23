interface Profile {
  name: string;
  age: number;
  married: boolean;
}

type CustomPartial<T> = {
  [P in keyof T]?: T[P];
};

const zerocho: Profile = {
  name: 'ZeroCho',
  age: 30,
  married: false,
};

const newZerocho: Partial<Profile> = {
  name: 'ZeroCho',
  age: 31,
};

const newZerocho2: CustomPartial<Profile> = {
  name: 'ZeroCho',
  age: 31,
};
