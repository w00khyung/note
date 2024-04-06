interface Cat {
  meow: number;
}
interface Dog {
  bow: number;
}

function catOrDog(a: Cat | Dog): a is Dog {
  if ((a as Cat).meow) return false;

  return true;
}

const cat: Cat | Dog = { meow: 1 };

function pet(a: Cat | Dog) {
  if (catOrDog(a)) {
    a.bow;
  }

  if ('meow' in a) {
    a.meow;
  }
}

pet(cat);

const isRejected = (input: PromiseSettledResult<unknown>): input is PromiseRejectedResult => {
  return input.status === 'rejected';
};

const isFulfilled = <T>(input: PromiseSettledResult<T>): input is PromiseFulfilledResult<T> => {
  return input.status === 'fulfilled';
};

const promises = await Promise.allSettled([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]);
const errors1 = promises.filter((promise) => promise.status === 'rejected');
const errors2 = promises.filter(isRejected);
