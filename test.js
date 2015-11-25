var datejs = require('./datejs'),
	now = new Date('20 November 2014');

console.log(datejs.format(now, 'M'));
console.log(datejs.format(now, 'F, Y'));
console.log(datejs.format(now, 'mdY'));
console.log(datejs.format(now, 'l F d, Y'));
console.log(datejs.format(now, 'F d G:i'));
console.log(datejs.format(now, 'Y/m/d'));
console.log(datejs.format(now, 'jS F Y'));

console.log('There are '+datejs.diff(now, new Date())+' days diff');
console.log('There are '+datejs.diff(now, new Date(), 'weeks')+' weeks diff');
console.log('There are '+datejs.diff(now, new Date(), 'months')+' months diff');
console.log('There are '+datejs.diff(now, new Date(), 'years')+' years diff');