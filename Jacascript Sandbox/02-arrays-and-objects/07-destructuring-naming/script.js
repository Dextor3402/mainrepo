const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person = {
    firstName,
    lastName,
    age,
}

console.log(person.age);


//Destricturing

const todo = {
    id: 1,
    title: 'take out trash',
    user: {
        name: 'john',
    }
};

const {
    id: todoId, 
    title, 
    user: {name}
} = todo;

console.log(name);

//destructure arrays
const numbers = [32,35,13,86]

const [first,second, ...rest] = numbers;

console.log(first, second, rest);