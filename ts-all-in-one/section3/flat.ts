// flat<A, D extends number = 1>(
//     this: A,
//     depth?: D,
// ): FlatArray<A, D>[];

// type FlatArray<Arr, Depth extends number> = {
//     done: Arr;
//     recur: Arr extends ReadonlyArray<infer InnerArr> ? FlatArray<InnerArr, [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20][Depth]>
//         : Arr;
// }[Depth extends -1 ? "done" : "recur"];

const a = [1, 2, 3, [1, 2], [[1], [2]]].flat();
const b = [1, 2, 3, [1, 2], [[1], [2]]].flat(2);
