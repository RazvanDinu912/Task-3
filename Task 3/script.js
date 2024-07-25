// This is command to send text to console log.
console.log("This is some random text inside the console log");


// This is a simple example of using variable and send the result to console log.
var a = 20;
var b = 40;
var sum = a + b;
console.log(sum);

// This is a simple example of using let.

let message = "Hello, world!";
console.log(message); 

message = "JavaScript is fun!";
console.log(message); 

if (true) {
    let blockScopedMessage = "This is block scoped!";
    console.log(blockScopedMessage); 
}

// This is a simple const example.

const greeting = "Hello, world!";
console.log(greeting); // Output: Hello, world!

const person = {
    name: "Alice",
    age: 25
};
console.log(person); 

person.name = "Bob";
console.log(person); 

// This is a simple example of using if/else.

let grade = 85;

if (grade >= 90) {
    console.log("A");
} else if (grade >= 80) {
    console.log("B");
} else if (grade >= 70) {
    console.log("C");
} else if (grade >= 60) {
    console.log("D");
} else {
    console.log("F");
}

// Another example.

let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log(dayName);