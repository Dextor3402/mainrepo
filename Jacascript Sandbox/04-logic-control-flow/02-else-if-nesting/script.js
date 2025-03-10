const d = new Date(10, 30, 2022, 6, 0, 0);
const hour = d.getHours();

if(hour < 12){
    console.log('Good Morning');
}else if(hour < 18){
    console.log('good afternoon');
} 
else {
    console.log('good night');
}

//nested if
if(hour < 12){
    console.log('Good Morning');
    if(hour === 6){
        console.log('wake up');
    }
}else if(hour < 18){
    console.log('good afternoon');
} 
else {
    console.log('good night');
    if(hour >= 20){
        console.log('zzzzzzzzzzzzzz');
    }
}

if(hour >= 7 && hour < 15){
    console.log('it is worktime');
}

if(hour === 6 || hour == 20){
    console.log('tooth brush');
}