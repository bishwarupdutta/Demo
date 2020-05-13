'use strict';


var ename = 'Welcome to Javascript Session';
console.log('Session -> ', ename);

// Shallow Copy and Deep copy

var teamA = [1, 2, 3, 4];
var teamB = [];

teamB = teamA;

teamA[0] = 10;

console.log('teamA ->' + teamA);
console.log('teamB ->' + teamB);

//Deep COpy

var teamA = [5, 6, 7, 8];
var teamB = new Array(teamA.length);

for (var i = 0; i < teamB.length; i++) {
    teamB[i] = teamA[i];
}

teamA[0] = 10;
teamA[1] = 20;

console.log('TeamA ->' + teamA); // [10,20,7,8]
console.log('TeamB ->' + teamB); // [5,6,7,8]

