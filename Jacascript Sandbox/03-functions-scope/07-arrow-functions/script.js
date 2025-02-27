
/*
function add(a,b){
    return a + b;
}

console.log(add(1,2));
*/

//arrow function
const add = (a,b) => {
    return a+b;
};


//implicit return
const subtract = (a,b) => a-b;

//can leave off ()with single param
const double = a => a*2;

//returning object
const createObj = () => ({
    name: 'Brad'
});


const numbers = [1,2,3,4,5];

//arrow in callback
numbers.forEach((n) => console.log(n));


console.log(add(1,2));
console.log(subtract(3,1));
console.log(double(3));
console.log(createObj());