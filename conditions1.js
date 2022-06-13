// console.log("Hello World");

// // creates a random number between 0 and 1
// let randomNumber = Math.random(); //0.0-1

// // This is an if condition where the random number less than 0.5
// if (randomNumber < 0.5) {

//     console.log("Condition Was Met");
//     console.log(randomNumber);
// } 

// //
// if (randomNumber >= 0.5) {

//     console.log('Condition Was Met');
//     console.log(randomNumber);
// }

// 
// const dayOfWeek = 'Friday';

// if (dayOfWeek === 'Saturday'){

//     console.log("Yay it's Saturday");

// } else if (dayOfWeek === 'Sunday'){

//     console.log("Yay it's Sunday");

// }else if (dayOfWeek === 'Friday'){

//     console.log("You have the correct day from the variable");
// }


// 
// const age = prompt("Enter An Age");

// if (age < 3) {

//     console.log("Hey, you're an infant!");

// } else if (age < 8) {

//     console.log("I bet you play fornite.");
// } else if (age < 35) {

//     console.log("Are your bones starting to fall apart?");
// } 
// // If all other conditions fail then use "else"
// else {

//     console.log("So when did you feel your mid life crisis?");
// }


// 
// const fruit = 'Watermelon';

// switch (fruit) {

//     case 'Mangos':
//         console.log("Mangos are $25 a pound");
//         break;
//     case 'Grapes':
//         console.log("Grapes are $11 a pound");
//         break;
//     case 'Coconut':
//         console.log("Coconuts are $15 a pound");
//         break;
//     case 'Watermelon':
//         console.log("Watermelons are $48 a pound");
//         break;
//     default:
//         console.log("Last Resort If All Conditions Fail");
// }


// 
// const password = prompt("Enter in a new password");

// if (password.length >= 6) {
//     if (password.indexOf(' ')=== -1) {
//         console.log("Valid Password");
//     } else {
//         console.log("Password Can't Have Spaces");
//     }
// } else {
//     console.log("Password Is Too Short");
// }


// 
function singSong() {

    console.log("DO");
    console.log("RE");
    console.log("Me");
}

singSong()
singSong()
singSong()

function greet(firstName) {

    console.log('Hey There, ${firstName}')
}

greet('Boomer');

function greet1(firstName, lastName) {
    
    console.log('Hey There, ${firstName} ${lastName}')
}

greet1('Baby Boomer');