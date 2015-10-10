var datejs = require('./datejs'),
	now = new Date();

console.log(datejs.format(now, 'M'));
console.log(datejs.format(now, 'F, Y'));