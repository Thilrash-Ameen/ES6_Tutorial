// const constant_name = value;

let a = 10;
// changing value to 20
a = 20;
// changing value by adding 5
a = a + 5;

console.log(a); // print 25

// const RATE = 0.1;
// RATE = 0.2; // type error

// JavaScript const and Object

const person = { age: 20 };
person.age = 30;
console.log(person.age);

const company = Object.freeze({
    name: 'ABC Company',
    address: {
        street: 'North 1st street',
        city: 'Narahenpita',
        state: 'Colombo',
        zipcode: '00500'
    }
});

console.log(company);

// add new data but you cannot update existing data
company.address.country = 'Sri Lanka';

console.log(company);

// JavaScript const and array

const colors = ['red'];
colors.push('green'); // inserting green into the array
console.log(colors);

colors.pop(); // removing last insterted greean from the array
console.log(colors);

// JavaScript const in a for loop

let scores = [75, 80, 95];

for (let score of scores) {
    console.log(score);
}

for (const score of scores) {
    console.log(score);
} // returns 75, 80, 95