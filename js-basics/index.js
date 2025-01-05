// //Object Oriented Programming (OOP)

// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         x: 1
//     },
//     isVisible: true,
//     draw: function(){
//         console.log('draw');
//     }
// };

// //Camel notation: oneTwoThreeFour
// //Pascal notation: OneTwoThreeFour

// //Factory functions

// function createCircle(radius){
//     return {
//         radius,
//         draw(){
//             console.log('draw');
//         }
//     };
// }

// // const circle1 = createCircle(1);
// // circle1.draw();

// //Constructor function

// function Circle(radius){
//     this.radius = radius;
//     this.draw = function(){
//         console.log('draw');
//     }
// }

// // const circle1 = new Circle(1);
// // circle1.draw();

const circle = {
    radius: 1
};

circle.color = 'yellow';
circle.draw = function() {};

delete circle.color;
delete circle.draw;

console.log(circle);
