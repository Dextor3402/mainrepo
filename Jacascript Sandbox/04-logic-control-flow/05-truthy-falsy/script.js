/*
const email = 'test';

if (email){
    console.log('you passed it');
}

console.log(Boolean(email));
*/

//Falsy values
/*
false
0
"" or '' (empty string)
null
undefines
NaN
*/

const x = false;

if(x){
    console.log('this is truthy');
}else {
    console.log('This is falsy');
}


console.log(Boolean(x));


//truthy false caviats
const children = 0;

if(!isNaN(children)){
    console.log(`you have ${children} children`);
}else {
    console.log('plese enter number of children');
}

//checking for empty arrays

const posts = ['post one', 'post two'];

if(posts.length > 0){
    console.log('list posts');
}else{
    console.log('no posts');
}

//checking for emypty objects
const user = {
    name: 'brad'
};

if(Object.keys(user).length > 0){
    console.log('list person');
}else{
    console.log('no user');
}

//loose equality (==)
console.log(false == 0);
console.log('' === 0);
console.log(null == undefined);