/*function add(a, b) {
  return a + b;
}

console.log(add(3, 1));

var toAdd = [9, 5];

console.log(add(...toAdd));*/


/*var groupA = ['Jen', 'Cory'];
var groupB = ['Vikram'];

var final = [...groupB, 3, ...groupA];

console.log(final);*/


var person = ['Tyler', 29];
var personTwo = ['Ria', 28];
//Hi Tyler you are 29

function greeting(name, age) {
  console.log('Hi ' + name + ', you are ' + age);
}

greeting(...person);
greeting(...personTwo);

var names = ['Mike', 'Ben'];
var final = ['Tyler', ...names];

final.forEach((name) => {
  console.log('Hi ' + name + '!');
});
