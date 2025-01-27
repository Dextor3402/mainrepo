//String
const firstName = 'Sara';

//Number
const age = 30;

//Boolean
const hasKids = true;

//Null
const aptNumber = null;

//Undefined
//let score;
const score = undefined;

//Symbol
const id = Symbol('id');

//BigInt
const n = 92334234576232n;

//Reference Types
const numbers = [1,2,3,4];

const person = {
    name: 'Brad'
}

function sayHello(){
    console.log('Hello');
}


const output = sayHello;

//CTRL + D (select next instance of what is already selected)
console.log(output, typeof (output));