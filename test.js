var datejs = require('./datejs'),
	now = new Date('November 20 2015');

console.log(datejs.format(now, 'M'));
console.log(datejs.format(now, 'F, Y'));
console.log(datejs.format(now, 'mdY'));
console.log(datejs.format(now, 'l F d, Y'));
console.log(datejs.format(now, 'F d G:i'));