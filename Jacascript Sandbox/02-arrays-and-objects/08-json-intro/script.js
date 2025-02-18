const post = {
    id: 1,
    title: 'post one',
    body: 'this is the body',
}

//convert to json

const str = JSON.stringify(post);

//parse json
const obj = JSON.parse(str);

const posts = [
    {
        id: 1,
        title: 'post one',
        body: 'this is the body',
    },
    {
        id: 2,
        title: 'post two',
        body: 'this is the body',
    }
]


const str2 = JSON.stringify(posts);



console.log(obj);