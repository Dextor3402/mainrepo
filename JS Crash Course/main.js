//Examine Document Object
/*
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.forms);
console.log(document.links);
console.log(document.images);
*/

//GETELEMENTBYID//
/*
//console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
//headerTitle.textContent = 'Hello';
//headerTitle.innerText = 'Goodbye';
//console.log(headerTitle.innerText);
//headerTitle.innerHTML = '<h3>Hello</h3>'
//header.style.borderBottom = 'solid 3px #000'

//GETELEMENTSBYCLASSNAME
var items = document.getElementsByClassName('list-group-item');

items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';



for(var i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = '#f4f4f4';
    console.log(items[i]);
}
*/

//GETELEMENTSBYTAGNAME//
/*
var li = document.getElementsByTagName('li');

li[1].textContent = 'Hello 2';
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'yellow';

for(var i = 0; i < li.length; i++) {
    li[i].style.backgroundColor = '#f4f4f4';
    console.log(li[i]);
}
*/

//QUERYSELECTOR//
/*
var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');
input.value = 'Hello World';

var submit = document.querySelector('input[type="submit"]');
submit.value = 'SEND';

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'coral';
*/

//QUERYSELECTORALL//
var titles = document.querySelectorAll('title');

titles[0].textContent = 'Hello';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for(var i = 0; i < odd.length; i++){
    even[i].style.backgroundColor = 'pink';
    odd[i].style.backgroundColor = '#f4f4f4';
}

