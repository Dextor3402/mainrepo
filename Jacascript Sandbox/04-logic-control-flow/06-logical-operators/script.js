console.log(10 > 20 && 30 > 15);

console.log(10 > 20 || 30 > 15);

//&& will return 1st faly faly or last value
let a;

a = 10 && 20;
a = 10 && 20 && 30;
a = 10 && 0 && 30;
a = 10 && '' && 0 && 30;


const posts = ['Post one', 'Post two'];

posts.length > 0 && console.log(posts[0]);


console.log(a);

// || wil return first truthy or the last value

let b;

b = 10 || 30;
b = 0 || 20;
b = 0 || null || '' || undefined;

console.log(b);

// ?? returns right side opedand when left null or undefined

let c;

c = 10 ?? 20;
c = null ?? 20;
c = undefined ?? 20;
c = 0 ?? 20;
c = '' ?? 20;


console.log(c);