const array = [1, 2, 3];

array.forEach((element) => {
  console.log(element);
});

const newArray2 = array.map((element) => {
  return element * 2;
});

console.log(newArray2);
