// let name = 'Igor';
// //console.log(name);

// //Cannot be a reserved keyword
// //Should be meaningfull
// //Cannot start with a number (1name)
// //Cannot contain a space or -
// //Are case sensitive

// let firstName = 'Igor';
// let lastName = 'Racz';

// name = 'Peti'; //String literal
// let age = 20; //Numver Literal
// let isApproved = true; //Boolean literal
// firstName = undefined;
// lastName = null;
// //console.log(name);

// //console.log(typeof lastName);


// let person = {
//     name: 'Igor',
//     age: '30'
// };

// //Dot notation
// person.name = 'Peti';

// //Bracket notation
// // let selection = 'name';
// // person[selection] = 'Jolia';

// // //console.log(person['name']);


// let selectedColors = ['Red', 'blue'];
// selectedColors[2] = '2';
// //console.log(selectedColors.length);
// //console.log(selectedColors);


// // Performing a task
// function greet(name, lastName) {
//     console.log('Hello ' + name + ' ' + lastName);
// }

// //Calculates value
// function square(number){
//     return number*number;
// }

// let number = square(3);

// //greet('Igor', 'Szandi');
// //console.log(square(2));
// //console.log(number);



// let x = 20;
// let y = 5;

// //console.log(x + y);
// //console.log(x - y);
// //console.log(x * y);
// //console.log(x / y);
// //console.log(x % y);
// //console.log(x ** y);

// //Increment (++)
// // console.log(x++);
// // console.log(x);

// //Decrement
// //console.log(--x)

// x = x + 5;
// x += 5;


// x = 1;
// //Relational
// // console.log(x > 5);
// // console.log(x >= 5);
// // console.log(x < 5);
// // console.log(x <= 5);

// //Equality
// // console.log(x === 5);
// // console.log(x !== 5);

// //Strict equality operator (type, value)
// // console.log(5 === 5);
// // console.log('x' === 'y');
// // console.log('y' === 'y');

// //Loose equality operator
// // console.log('x' == 'x');
// // console.log(1 == "1");
// // console.log('true' == 'true');
// // console.log(2 == 322);
// // console.log('cica' == 'kutya');

// // ternary operators
// let points = 100;
// let type = points > 100 ? 'gold' : 'silver';

// // console.log(type);

// // logical ooperators

// //Logical and (&&)
// //returns true if both operands are true
// // console.log(true && true);
// // console.log(true && false);

// // let highIncome = true;
// // let goodCreditScore = false;
// // let eligibleLoan = highIncome && goodCreditScore ? true : false;

// // console.log(eligibleLoan);

// //logical or (||)
// //returns true if one of the aparands is true

// // let highIncome = false;
// // let goodCreditScore = true;
// // let eligibleLoan = highIncome || goodCreditScore ? true : false;

// //  console.log('Eligible: ', eligibleLoan);

// // //Not (!)
// // let applicationRefuse = !eligibleLoan;
// // console.log('Application refused: ', applicationRefuse);

// //Falsy (false)
// // undefined
// // null
// // 0
// // false''
// // NaN

// //anything that is not saly is truthy

// //short circuiting

// // let userColor = '';
// // let defaultColor = 'blue';
// // let currentColor = userColor || defaultColor;

// // console.log(currentColor);

// // 1 = 00000001
// // 2 = 00000010
// // 3 = 00000011
// // R = 00000000

// // console.log(1 | 2); // bitwise OR
// // console.log(1 & 2); // bitwise AND

// //Read, write, execute
// // 00000100
// // 00000110
// // 00000111

// // const readPermission = 4;
// // const writePermission = 2;
// // const executePermission = 1;
// // let myPermission = 0;
// // myPermission = myPermission | readPermission | writePermission;

// // let message = (myPermission & readPermission) ? 'yes' : 'no';
// // console.log(message);


// // let a = 'red';
// // let b = 'blue';
// // console.log(a);
// // console.log(b);

// // let c = a;
// // a = b;
// // b = c;

// // console.log(a);
// // console.log(b);



// //Hour
// //if hour between 6 and 12 good morning, if 12 7 good afternoon else good night
// // let hour = 16;
// // if(hour >= 6 && hour <= 12)
// //     console.log('Good Morning!');
// // else if(hour > 12 && hour <= 19 ) 
// //     console.log('Good Afternoon!');
// // else if (hour > 19 && hour <= 24 )
// //     console.log('Good Night!');
// // else
// //     console.log('U dont know what time is it!');



// let role = 'quest';

// switch(role){
//     case 'quest' :
//         console.log('Quest user');
//         break;
//     case 'moderator' :
//         console.log('Moderator user');
//         break;
//     case 'admin' :
//         console.log('Admin user');
//         break;
//     default:
//         console.log('Unkown User');
// }

// if (role === 'quest') console.log('Quest user');
// else if (role ==='Moderator') console.log('moderator user');
// else if(role === 'admin') console.log('admin user');
// else console.log('unkown user');


// for(let i = 0; i < 5; i++){
//     if(i % 2 !== 0) console.log(i);
// }

// let i = 0;
// while(i <= 5){
//     if(i % 2 !== 0) console.log(i);
//     i++;
// }

//do while

// let i = 0;
// do{
//     if(i % 2 !== 0) console.log(i);
//     i++;
// }while(i <= 5);

// for
// while
// do while

// //dot notation
// person.name
// //bracket notation
// person['name']

// //for-in
// const person = {
//     name: 'Igor',
//     age: 30
// };

// for(let key in person)
//     console.log(key, person[key]);

// const colors = ['red','green','blue']
// // for(let index in colors) console.log(index, colors[index]);

// //for-of
// for(let color of colors) console.log(color);


// let i = 0;
// while (i <=10 ){
//     //if(i === 5)break;
//     if(i % 2 === 0){
//         i++;
//         continue;
//     }
//     console.log(i);
//     i++;
// }

