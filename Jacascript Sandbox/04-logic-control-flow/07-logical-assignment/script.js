

// ||= assigns the right side only if left falsy

let a = false;

if(!a){
    a = 10;
}

a = a || 10;

a ||= 10;

console.log(a);

// &&= assigns right only if left is truthy

let b = 20;

if(b){
    b = 21;
}

b = b && 20;

b &&= 20

console.log(b);


// ??= assigns right if left null or undefined
let c = null;

if(c === null || c === undefined){
    c = 20;
}

c = c ?? 20;

c ??= 20;

console.log(c);