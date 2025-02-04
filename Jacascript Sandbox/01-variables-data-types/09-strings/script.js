let x;


const name = 'John';
const age = 30;

x = 'Hello my name is';

//Template literals ALtgr+7
x = `Hello, my name is ${name} and i am ${age} years old.`;


// string Properties and methods
const s = 'Hello world';

x = s.length;


//Acces value by keys
x = s[0];

x = s.__proto__;


x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(0);

x = s.indexOf('e');

x = s.substring(0,5);

x = s.substring(7);

x = s.slice(-11, -6);

x = s.trim();

x = s.replace('world', 'John');

x = s.includes('Hello');

x = s.valueOf();

x = s.split(' ');

console.log(x);