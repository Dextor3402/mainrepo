
(function(){
    const user = 'John';
    console.log(user);
    const hello = () => console.log('hello from ife');
    hello();
})();

(function (name){
    console.log('hello ' + name);
})('Shawn');


(function hello(){
    console.log('hello');
   
})();