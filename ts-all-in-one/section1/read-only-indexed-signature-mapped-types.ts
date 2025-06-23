// read-only
interface A {
  readonly a: string;
  b: string;
}

// indexed signature
interface B {
  [key: string]: string;
}

const b: B = {
  a: 'a',
  b: 'b',
  c: 'c',
};

// mapped types
type C = 'Human' | 'Mammal' | 'Animal';
type D = { [key in C]: string };

const d: D = {
  Human: 'human',
  Mammal: 'mammal',
  Animal: 'animal',
};
