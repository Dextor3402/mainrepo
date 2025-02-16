let x;


const todo = new Object();

todo.id = 1;
todo.name = 'Buy milk';
todo.completed = false;

x = todo;

const person = {
    address: {
        cords: {
            lat: 32.2314,
            lang: -73.2332,
        },
    },
};

x = person.address.cords.lat;

const obj1 = {a:1, b:2};
const obj2 = {c:3, d:4};

const obj3 = {...obj1, ...obj2};
const obj4 = Object.assign({}, obj1,obj2)

const todos = [
    {id: 1, name: 'Buy milk'},
    {id: 2, name: 'Buy potato'},
    {id: 3, name: 'Buy red bull'},
]


x = todos[0];

x = Object.keys(todo).length;

x = Object.values(todo);

x = Object.entries(todo);

x = todo.hasOwnProperty('name');











console.log(x);