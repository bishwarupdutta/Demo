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

/*var accessForDL;
var age = prompt("Enter your age", '');

accessForDL = (age >= 18) ? 'Issue Driving Licence ' : ' Don\'t Issue ';

console.log(accessForDL);*/

//var grade;
//var marks = prompt("Enter your marks", "");

//grade = (marks > 90) ? 'Grade E' : (marks > 80) ? 'Grade A' : (marks > 70) ? 'Grade B' : (marks > 50) ? 'Grade C' : (marks > 40) ? 'Grade D' : 'Fail';
//console.log(grade);


//switch statement

var grade = 'B';
switch (grade) {
    case 'A':
        console.log('Excellent');
        break;
    case 'B':
        console.log('Well done');
        break;
    case 'C':
        console.log('Just pass');
        break;
    default:
        console.log('Better try next time');
        break;

}

//while and do-while statement

var count = 0;
var total = 0;

console.log('Count:  Total:');
while (count < 3) {
    count++;
    total += count;      // total = total +count
    console.log(count + '\t\t' + total);
}

var count = 0;

do {
    count += 1;   // count =count +1
    console.log(count);
} while (count > 5);

//for statement

for (var count = 0; count < 3; count++) {
    console.log('Value: ' + count);
}

//break statement
for (var count = 1; count < 10; count++) {
    if (count % 2 == 0) {
        break;
    }
    console.log('Value: ' + count);

}

//continue statement

for (var count = 1; count < 10; count++) {
    if (count % 2 == 0) {
        continue;
    }
    console.log('Value: ' + count);

}

