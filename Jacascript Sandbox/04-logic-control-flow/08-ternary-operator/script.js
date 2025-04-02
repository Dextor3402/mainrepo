const age = 19;

//using if statement
if (age >= 18){
    console.log('You can vote');
}else {
    console.log('you can not vote');
}

//using ternary operator
age >= 18 ? console.log('you can vote') : console.log('you can not vote');


//assigning a conditional value

const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? 'you can vote' : 'you can not vote';

console.log(canVote);
console.log(canVote2);


//multiple statements

const auth = true;
//let redirect;

/*
if(auth){
    alert('welome to the dashboard');
    redirect =  '/dashboard';
}else{
    console.log('accces denied');
    redirect ='/login';
}
*/
/*
const redirect = auth ? (alert('welcome to the dashboard', '/dashboard')) 
: (alert('acces denied', '/login'))
*/

console.log(redirect);

//auth ? console.log('welcome to the dashboaard') : null;

auth && console.log('welcome to the dashboard');


