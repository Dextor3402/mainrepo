//Exercise 1

function getMaxNumber(numberOne,numberTwo) {
    return numberOne > numberTwo ? numberOne : numberTwo;
}

//console.log(getMaxNumber(10,10))

//Exercise 2
function isLandscape(width,height){
    return width > height ? 'Its landscape' : 'Its not landscape';
}

//console.log(isLandscape(8000,1200));

//Exercise 3

function fizzBuzz(input){
    if(typeof input === 'number'){
        if(input % 3 === 0 && input % 5 === 0){
            console.log('FizzBuzz');
        }else if (input % 3 === 0 && input % 5 !== 0){
            console.log('Fizz');
        }else if(input % 3 !== 0 && input % 5 === 0){
            console.log('Buzz');
        }else console.log(input);
    }else console.log('Not a number');
} 

//fizzBuzz(false);

//Exercise 4

//Speed Limit 70
//5--> 1 point
//Math.floor(1.3);
//12 points -> suspended

function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;
    if(speed < speedLimit + kmPerPoint){
        return 'ok'
    }else if(speed > speedLimit){
        let points = 1;
        for(let i = 0; i < (speed - speedLimit) / kmPerPoint;i++){
            points++;
            if(points >= 12) return 'License suspended';
        }
        return points;
    }//else{
    //let points = Math.floor((speed-speedLimit)/kmPerPoint);
    // if (points >= 12)
    //     console.log('License suspended')
    // else
    // console.log('points:', points);
    //} 
    //
}
//console.log(checkSpeed(140));

//Exercise 5

function shownumbers(limit){
    if(typeof limit == 'number'){
        for(let i = 0; i <= limit; i++){
            // if(i % 2 != 0) console.log(i + ' Odd');
            // else console.log(i + ' Even');

            const message = (i % 2 === 0) ? ' EVEN' : ' ODD';
            console.log(i, message);
        }
    }else return NaN;
}

//console.log(shownumbers(10)); 

//Exercise 6
const array = [4,1,0,4,'', 5,NaN, 'intel', null, undefined];
function countTruthy(array){
    let count = 0;
    for(let value of array){
        if(value)
            count++;
    }
    return count;
}
countTruthy(array)

//console.log(countTruthy(array));

//Exercise 7

const movie = {
    title: 'a',
    releaseYear: 1994,
    rating: 5.6,
    director: 'b'
};

 function showProperties(obj){
    for(let key in obj){
        //if(isNaN(obj[key])) console.log(key,obj[key]);
        if(typeof obj[key] === 'string')
            console.log(key,obj[key])
    }
 }

//showProperties(movie);

//Exercise 8

function sum(limit){
    let number = 0;
    
    for(let i = 0; i <= limit; i++){
        if (i % 3 === 0 || i % 5 === 0)
            number += i;
    }
    return number;
}

//console.log(sum(10));

//Exercise 9

//const marks = [80,80,50];

//Average 70
// 1-59 f
// 60-69 d
// 70-79 c
// 80-89 b
// 90 - 100 a

// function calculateGrade(marks){
    
//     summa = calculateAverage(marks);
     
//     if(summa<60) summa = 'F'
//     else if(summa >= 60 && summa < 70) summa = 'D'
//     else if(summa >= 70 && summa < 80) summa = 'C'
//     else if(summa >= 80 && summa < 90) summa = 'B'
//     else if(summa >= 90 && summa < 100) summa = 'A'
    
//     return summa;
// }

// function calculateAverage(array){
//     let summa = 0;
//     let arrayLength = 0;

//     for(let key in array){
//         summa += array[key];      
//         arrayLength++;
//     }
//     return summa /= arrayLength;
// }

// //console.log(calculateGrade(marks));

// function showStars(rows){
//     for(let i = 0; i < rows; i++){
//         let pattern = '';
//         for(let i = 0; i < rows; i++){
//             pattern = '*';
//         }
//         console.log(pattern);
        
        
        
//     }
// }

// showStars(10);



function showPrimes(limit){
    for(let number = 2; number <= limit; number++){
        let isPrime = true;
        for(let factor = 2; factor < number; factor++){
            if(number % factor === 0){
                isPrime = false;
                break;
            }    
        }
        if(isPrime) console.log(number);
    }
}
showPrimes(10);


