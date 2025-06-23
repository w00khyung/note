import { C } from './class-test';

const d: C = { foo: 'bar' };

if (d instanceof C) {
  console.log(d.foo);
}
