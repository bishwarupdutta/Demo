'use strict';

/*console.log(10 / 2);

console.log(10 / 2 == 10.0 / 2.0);

var x = 3;
console.log(++x);

var y = 4;
console.log(y++):

var z = y;
console.log(z);*/

/*var x1 = 10;
console.log(-x1);

var str = 'Goo' + 'gle';
console.log(str);

console.log(50 > 20);
console.log(50 == 20);

console.log(true == 1); //true
console.log(false == 0); // true
console.log('' == false); // true

var isAge = 20;
var isEyeSight = 0.75;
if (isAge >= 18 && isEyeSight >= 0.5) {
    console.log("Issue Driving Licence");
} else {
    console.log("Unauthorized candidate");
}

var accessForDL;
var age = prompt("Enter your age", '');

if (age > 18) {
    accessForDL = 'Issue Driving Licence';
}
else {
    accessForDL = 'Don\'t Issue';
}
console.log(accessForDL);
*/

var accessForDL;
var age = prompt("Enter your age", '');

accessForDL = (age >= 18) ? 'Issue Driving Licence ' : ' Don\'t Issue ';

console.log(accessForDL);