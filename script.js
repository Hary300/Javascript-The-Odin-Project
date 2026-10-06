// let firstName = 'John';
// let lastName = 'Doe';

// console.log(firstName);
// console.log(lastName);

// let age = 11;
// console.log(age);
// age = 50;
// console.log(age);

// const pi = 3.14;
// // pi = 10;

// // console.log(pi); // error

// // 1
// console.log('Task 1: ', 23 + 97);

// // 2
// console.log('Task 2: ', 1 + 2 + 3 + 4 + 5 + 6);

// // 3
// console.log('Task 3: ', (4 + 6 + 9) / 77);

// // 4
// let a = 10;
// console.log('Task 4: ', a);
// a = 50;
// console.log('Task 4: ', a);

// let b = 7 * a;
// console.log('Task 4: ', b);

// // 5
// const max = 57;
// const actual = max - 13;
// const percentage = actual / max;
// console.log('Task 5: ', percentage);

// function add7(number) {
//   return number + 7;
// }

// console.log(add7(10));

// function multiply(number1, number2) {
//   return number1 * number2;
// }

// console.log(multiply(3, 2));

// function capitalize(text) {
//   const result = text[0].toUpperCase() + text.slice(1).toLowerCase();

//   return result;
// }

// console.log(capitalize('abcd'));
// console.log(capitalize('ABCD'));
// console.log(capitalize('aBcD'));

// function lastLetter(text) {
//   return text[text.length - 1];
// }

// console.log(lastLetter('abcd'));

// Fizz-Buzz
let answer = prompt('Enter number');

const number = parseInt(answer);

while (answer !== null && (isNaN(parseInt(answer)) || parseInt(answer) < 3)) {
  answer = prompt('Must be number and greater than 3');
}

function makeFizzBuzz(answer) {
  for (let i = 1; i <= answer; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

makeFizzBuzz(answer);
