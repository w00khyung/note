let city = 'new york city';
console.log(city.toUppercase());

interface State {
  name: string;
  capital: string;
}

const states: State[] = [
  { name: 'Alabama', capitol: 'Montgomery' },
  { name: 'Alaska', capitol: 'Juneau' },
  { name: 'Arizona', capitol: 'Phoenix' },
];

for (const state of states) {
  console.log(state.capital);
}

const x = 2 + '3'; // 정상, string 타입입니다.
const y = '2' + 3; // 정상, string 타입입니다.

const a = null + 7; // The value 'null' cannot be used here.
const b = [] + 12; // Operator '+' cannot be applied to types 'never[]' and 'number'.
alert('Hello', 'TypeScript'); // Expected 0-1 arguments, but got 2.

const names = ['Alice', 'Bob'];
console.log(names[2].toUpperCase()); // TypeError: Cannot read property 'toUpperCase' of undefined
