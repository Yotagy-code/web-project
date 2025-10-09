const score = 75;
if (score >= 90) {
  console.log('Отлично');
} else if (score >= 60) {
  console.log('Хорошо');
} else {
  console.log('Нужно подтянуть');
}

const result = score >= 60 ? 'зачёт' : 'незачёт';
console.log(result);

const user = 'Olia';
const points = 42;
const msg = `Привет, ${user}! У тебя ${points} очков.`;
console.log(msg);

let a = 10;
let b = 3;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(10 % 3);
console.log(8 % 2);
console.log(7 / 2);
console.log(5 * 3);
console.log('6' * '7');
console.log(10 - 4);
console.log(2 + 3);
console.log('Привет, ' + 'мир!');

console.log("error");
console.warn("error");
console.error("error");
console.table("error");

let age = 20;
const pi = 3.14;
var legacy = 'old';

let name = 'Olia';
let isAdmin = false;
let nothing = null;
let unknown;

console.log(typeof age);
console.log(typeof name);
