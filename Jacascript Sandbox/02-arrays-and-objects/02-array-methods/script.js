let x;

const arr = [1,2,5,87,23,65]
/*
arr.push(100);

arr.pop();

arr.unshift(99);

arr.shift();

arr.reverse();
*/
x = arr.includes(20);

x = arr.indexOf(5);

x = arr.slice(1, 4);

//x = arr.splice(1, 4);

//x = arr.splice(3,1)

x = arr.splice(1, 4).reverse().toString().charAt(0);






console.log(x);