function greeting(name, callback){
    let sentence = 'Hello, my name is ' + name;

    let otherSentence = callback();

    return sentence + otherSentence;
}



function anotherGreeting() {
    let sentence = ' I forgot my last name';

    return sentence;
}

let myName = 'Shane';
console.log(greeting(myName, anotherGreeting));


// Make a function

// function printArray(array, callback){
//     for (let i = 0; i < array.length; i++){
//         let numbers = array[i];

//         console.log(numbers);
//     }
//     callback(array);

// }

// function printArrayAgain(array){
//     for (let i = 0; i < array.length; i++){
//         let number = array[i];

//         console.log(number)
//     }

// }

// const numbersArray = [1, 2, 3, 4, 5, 6];

// printArray(numbersArray, printArray);

// // exercise

function calculator(num1, num2, callbackOne, callbackTwo){
    let result = callbackOne(num1, num2) + callbackTwo(num1, num2);

    return result;
}

function addNumbers(num1, num2){
    let result = num1 + num2;

    return result;

}

function subtractNumbers(num1, num2){
    let result = num1 - num2;

    return result;

}

console.log(calculator(5,77, addNumbers, subtractNumbers));

//super hero

function superHero(abilityOne, abilityTwo){
    let sentence = abilityOne() + ' and ' + abilityTwo();

     return sentence;
}
function shrink() {
    let power = 'I can shrink down to ant size';

    return power;
}

function superStrength(){
    let strength = 'I retain my strength no matter what size i become'

    return strength;
}

console.log(superHero(shrink, superStrength));


// Timing Functions

function blastOff(){
    let num = 0;

    for (let i = 10; i >= num; i--){
        console.log(i); // 10, 9, 8, 7, 6...
    }

    console.log('BLAST OFF!!')
}

setTimeout(blastOff, 5000);

//make a function that prints your name
//setTimeout and pass in function and a time (5000)

function printName(){
    var name = 'Shane';
    console.log(name)
}

setTimeout(printName, 5000)