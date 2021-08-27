var counter;

function increase() {
    var counter = 10;
    console.log(counter);
} // cannot access the counter variable here

for (var i = 0; i < 5; i++) {
    console.log("Inside the loop", i);
}

console.log("Outside the loop", i); // returns Outside the loop 5

for (let a = 0; a < 5; a++) {
    console.log("Inside the loop LET : ", a);
}

console.log("Outside the loop LET : ", a); // error