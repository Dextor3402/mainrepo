let d;

d = new Date();

d = d.toString();

d = new Date(2022, 6, 10);

d = new Date('2021-07-18');

d = new Date('07/18/2021');

d = Date.now();

d = new Date('07.18.2022 12:30:00');

d = d.getTime();

d = d.valueOf();

d = new Date(1658140200000);

d = Math.floor(Date.now() / 100);

console.log(d, typeof d);