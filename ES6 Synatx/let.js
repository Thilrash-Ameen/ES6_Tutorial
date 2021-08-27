// Declare Variable for let
// let variable_name;

let x = 10;

var a = 25;

if (x == 10) {
    // inside a block

    let x = 20;
    let b = 50;

    console.log(x); // returns 20
    console.log(window.a); // returns 25
    console.log(window.b); // returns undefined
}

console.log(x); // return 10


// JavaScript let and callback function in a for loop

for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}

// fix the issue on ES5

for (var d = 0; d < 5; d++) {
    (function (j) {
        setTimeout(function () {
            console.log(j);
        }, 1000);
    })(d);
}

// fix the issues on ES6

for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}

// complete ES6 style

for (let i = 0; i < 5; i++) {
    setTimeout(() => console.log('Complete ES6 Style : ' + i), 1000);
}

// redeclaration

var counter = 100;
var counter;
console.log(counter); // returns 100

// let counter = 150;
// let counter;
// console.log(counter); // returns Error

