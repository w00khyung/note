interface Profile {
  name: string;
  age: number;
  married: boolean;
}

type A = Exclude<keyof Profile, 'married'>;
type O<T, S extends keyof any> = Pick<T, Exclude<keyof T, S>>;

const zerocho: O<Profile, 'married'> = {
  name: 'ZeroCho',
  age: 30,
};
