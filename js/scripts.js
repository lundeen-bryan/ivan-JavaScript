// Lesson 4
// console.log(document.getElementById('blue_box').innerHTML);
// document.getElementById('blue_box').innerHTML = '<h1>Testing</h1>';

/*=============================================
=            Section Lesson 5
=============================================*/
var user_name = ' New User';

// document.getElementById('user_greeting_message').innerHTML =
//   'Hello' + user_name + '!';

/*=============================================
=            Section Lesson 8
=============================================*/
var orderValue = 2800;

if (orderValue >= 6000) {
  console.log('You are eligeble to finance.');
} else {
  console.log('You are not elegible. ');
}

function sum_numbers() {
  let num1 = 5;
  let num2 = 2;
  let sum = num1 + num2;
  console.log(sum);
}

function sum_args(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

console.log(sum_args(5, 2));
console.log(sum_args(50, -2));
console.log(sum_args(500, 2));

let avg = sum_args(2, 10) / 6;
console.log(avg);

const EMPLOYEE = {
  name: 'James Taylor',
  yearOfBirth: 1948,
  ID: 'SBJ0001',
  role: 'IT analyst',
};

EMPLOYEE.role = 'IT Manager';
EMPLOYEE.passport = 'GH009';
console.log(EMPLOYEE);
