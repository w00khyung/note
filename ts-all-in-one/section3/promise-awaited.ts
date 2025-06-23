const p1 = Promise.resolve(1)
  .then((a) => a + 1)
  .then((a) => a.toString());
const p2 = Promise.resolve(2);
const p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000);
});

// all<T extends readonly unknown[] | []>(values: T): Promise<{ -readonly [P in keyof T]: Awaited<T[P]>; }>;

// type Awaited<T> = T extends null | undefined ? T : // special case for `null | undefined` when not in `--strictNullChecks` mode
//     T extends object & { then(onfulfilled: infer F, ...args: infer _): any; } ? // `await` only unwraps object types with a callable `then`. Non-object types are not unwrapped
//         F extends ((value: infer V, ...args: infer _) => any) ? // if the argument to `then` is callable, extracts the first argument
//             Awaited<V> : // recursively unwrap the value
//         never : // the argument to `then` was not callable
//     T; // non-object or non-thenable

Promise.all([p1, p2, p3]).then((result) => {
  console.log(result);
});
